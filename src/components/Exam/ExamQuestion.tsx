"use client";

import { IQuestion } from "./types";

interface Props {
  currentIndex: number;
  answer?: string;
  dispatch: React.Dispatch<any>;
  question: IQuestion;
}

const ExamQuestion: React.FC<Props> = ({
  currentIndex,
  answer,
  dispatch,
  question,
}) => {
  return (
    <div className="text-white text-2xl mt-10 flex flex-col gap-4 w-full">
      <p>{question.question}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt) => (
          <label
            key={opt}
            className={`cursor-pointer px-3 py-2 rounded-md border  ${
              answer === opt ? "bg-white text-indigo-600" : "bg-indigo-500"
            }`}
          >
            <input
              type="radio"
              name={`question-${currentIndex}`}
              value={opt}
              checked={answer === opt}
              onChange={() =>
                dispatch({
                  type: "SAVE_OPTION",
                  payload: { index: currentIndex, answer: opt },
                })
              }
              className="hidden"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ExamQuestion;
