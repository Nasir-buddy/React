import React from "react";

const QuestionCard = ({ question, onAnswer, selectedOption }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded ${
              selectedOption === option
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
