import PropTypes from 'prop-types';
import Options from './Options';

export default function Question({ question, dispatch, answer }) {
  console.log(question);

  if (!question) return null;

  return (
    <div> 
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
