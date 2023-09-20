import { useState } from "react";

const Game = (props) => {
  const questions = getQuestion();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = questions[currentQuestion];

  const options = question.answers.map((answer, index) => (
    <p className="option" key={index}>
      <input
        type="radio"
        name="question"
        onClick={() => setSelectedAnswer(index)}
      />
      {answer}
    </p>
  ));

  const handleDecided = () => {
    if (selectedAnswer === question.correct) {
      console.log("rätt");
      props.answeredCorrectly();
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      props.showResult();
    }
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {options}
      <button onClick={handleDecided}>check answer</button>
    </div>
  );
};

const getQuestion = () => {
  return [
    {
      question: "När är julafton?",
      answers: ["24 maj", "24 december", "24 oktober"],
      correct: 1,
    },
    {
      question: "Hur många månader är det på ett år?",
      answers: ["10", "15", "12"],
      correct: 2,
    },
    {
      question: "Hur långt är ett snöre?",
      answers: ["Lagom", "Inte tillräckligt", "Rätt långt"],
      correct: 1,
    },
  ];
};

export default Game;
