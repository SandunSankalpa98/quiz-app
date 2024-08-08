import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Timer({ dispatch, secondsRemaining }) {

  const min = Math.floor(secondsRemaining / 60) ;
  const sec = secondsRemaining % 60;
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,         // Validate that dispatch is a required function
  secondsRemaining: PropTypes.number.isRequired // Validate that secondsRemaining is a required number
};
