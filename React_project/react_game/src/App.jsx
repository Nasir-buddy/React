import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBorad";

const App = () => {
  const questions = [
    { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Tool"], answer: "Library" },
    { id: 2, question: "What is JSX?", options: ["JavaScript XML", "Java Syntax", "XML Tool", "None"], answer: "JavaScript XML" },
    { id: 3, question: "React is developed by?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (!answers[currentQuestion] && selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
  };

  const handleNavigation = (direction) => {
    if (direction === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => setIsFinished(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {isFinished ? (
        <ScoreBoard score={score} total={questions.length} />
      ) : (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <QuestionCard
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            selectedOption={answers[currentQuestion]}
          />
          <div className="flex justify-between mt-5">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
              onClick={() => handleNavigation("prev")}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleFinish}
              >
                Finish
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleNavigation("next")}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
