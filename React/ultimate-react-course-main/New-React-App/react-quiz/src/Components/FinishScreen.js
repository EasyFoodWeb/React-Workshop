import { useQuiz } from "../Context/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPoints}
      </p>
      <p className="highscore">Highscore: {highscore} Points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
