import PropTypes from 'prop-types';

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} question{numQuestions !== 1 ? 's' : ''} to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({type: "start"})}>Let s Start</button>
    </div>
  );
}

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
};
