function FinishScreen({
  points,
  maxPoints,
  highScore,
  dispatch,
  secondsRemaning,
}) {
  const percentage = (points / maxPoints) * 100;
  const mins = Math.floor(secondsRemaning / 60);
  const secs = secondsRemaning % 60;
  let emoji;

  if (percentage > 80) emoji = "🥇";
  if (percentage > 60 && percentage < 80) emoji = "🎁";
  if (percentage > 40 && percentage < 60) emoji = "🎁";
  if (percentage < 40) emoji = "😥";
  if (percentage === 0) emoji = "👹";
  return (
    <>
      <div className="result">
        <p>
          <span>{emoji}</span>You Scored <strong>{points}</strong> Out of{" "}
          {maxPoints} ({Math.ceil(percentage)}%)
        </p>
      </div>
      <p className="highscore ">(HighScore: {highScore} Points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
