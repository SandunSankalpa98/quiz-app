import { useEffect, useReducer } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Loader from './Components/Loader';
import Error from './Components/Error';
import StartScreen from './Components/StartScreen';
import Question from './Components/Question';
import NextButton from './Components/NextButton';
import Progress from './Components/Progress';
import FinishScreen from './Components/FinishScreen';

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions[state.index];
      const isCorrect = action.payload === question.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    case 'nextQuestion': // Corrected the action type name
      return {
        ...state,
        index: state.index + 1,
        answer: null, // Reset answer for the next question
      };
    case 'finished': // Corrected the action type name
      return {
        ...state,
        status: "finished",
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && (
          <> 
            <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} />
          </>
        )}

        {status === 'finished' && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints}/>}
      </Main>
    </div>
  );
}
