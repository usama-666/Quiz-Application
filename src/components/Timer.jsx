import { useEffect } from "react";

function Timer({ secondsRemaning, dispatch }) {
  const mins = Math.floor(secondsRemaning / 60);
  const secs = secondsRemaning % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      //cleanup func
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{secs < 10 ? "0" : ""}
      {secs}
    </div>
  );
}

export default Timer;
