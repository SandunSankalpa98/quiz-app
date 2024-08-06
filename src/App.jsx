
import { useEffect, useReducer } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Loader from './Components/Loader';

const initialState = {
  questions: [],

  // 'loading', 'error', 'active', 'finished'
  status: "loading"
}
function reducer(state, action){
  switch(action.type){
    case 'dataReceived':
      return{
        ...state,
        questions:action.payload,
        status: "ready",
      };
    case "dataFailed":
      return{
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action unkonwn")
  }
}

export default function App() {

  const [{questions, status}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  
  return (
    <div className='app'>
      <Header/>
      <Main>
        {status === "loading" && <Loader/>}
      </Main>
    </div>
  )
}
