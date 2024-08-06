import PropTypes from 'prop-types';

export default function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`btn btn-option ${
               index === answer ? "answer" : ""} 
            ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`}
          disabled={answer !== null}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  question: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired, // Add validation for correctOption
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number, // Correct the type for answer
};
