const Result = (props) => {
  return (
    <section>
      <h2>Result</h2>
      <p>You got {props.score} points</p>
      <p>Do you want to try again?</p>
      <button onClick={props.restartQuiz}>yes</button>
    </section>
  );
};

export default Result;
