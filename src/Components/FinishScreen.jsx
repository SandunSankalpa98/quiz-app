import PropTypes from 'prop-types';

export default function FinishScreen({ points, maxPossiblePoints }) { 
    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "😊";
    if (percentage >= 0 && percentage < 50) emoji = "☹";
    if (percentage === 0) emoji = "💔";

    return (
        <p className="result">
            <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
    );
}

FinishScreen.propTypes = {
    points: PropTypes.number.isRequired,           // Validate that points is a required number
    maxPossiblePoints: PropTypes.number.isRequired // Validate that maxPossiblePoints is a required number
};
