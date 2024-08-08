import PropTypes from 'prop-types';

export default function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  );
}

Progress.propTypes = {
  index: PropTypes.number.isRequired,          // Validate that index is a required number
  numQuestions: PropTypes.number.isRequired,   // Validate that numQuestions is a required number
  points: PropTypes.number.isRequired,         // Validate that points is a required number
  maxPossiblePoints: PropTypes.number.isRequired, // Validate that maxPossiblePoints is a required number
  answer: PropTypes.oneOfType([                // Validate that answer can be either a string or null
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]).isRequired
};
