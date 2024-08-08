import PropTypes from "prop-types";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "😊";
  else if (percentage > 0) emoji = "☹";
  else emoji = "💔";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

FinishScreen.propTypes = {
  points: PropTypes.number.isRequired,           // Validate that points is a required number
  maxPossiblePoints: PropTypes.number.isRequired, // Validate that maxPossiblePoints is a required number
  highscore: PropTypes.number.isRequired,         // Validate that highscore is a required number
  dispatch: PropTypes.func.isRequired,            // Validate that dispatch is a required function
};
