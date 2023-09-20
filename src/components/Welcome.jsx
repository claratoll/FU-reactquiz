const Welcome = (props) => {
  return (
    <section>
      <h2>Welcome to the quiz</h2>
      <p>Do you want to start?</p>
      <button onClick={props.nextScreen}>Yes</button> <button>no</button>
    </section>
  );
};

export default Welcome;
