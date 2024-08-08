import PropTypes from 'prop-types';
import Options from './Options';

export default function Question({ question, dispatch, answer }) {
  console.log(question);

  if (!question) return null;

  return (
    <div> 
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired, // Validate the correctOption
  }).isRequired,
  dispatch: PropTypes.func.isRequired, // Validate that dispatch is a function
  answer: PropTypes.number,            // Validate that answer is a number or null
};
