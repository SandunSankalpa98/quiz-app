import PropTypes from 'prop-types';

export default function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion' })}>
      Next
    </button>
  );
}

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};
