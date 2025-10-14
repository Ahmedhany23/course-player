"use client";

import React, { Suspense, useEffect, useReducer } from "react";

import { examReducer, loadInitialState } from "./reducer/examReducer";
import dynamic from "next/dynamic";
import { ExamData } from "@/constants/exams";

const ExamQuestion = dynamic(() => import("./ExamQuestion"), { ssr: false });
const ExamHeader = dynamic(() => import("./ExamHeader"), { ssr: false });
const ExamCurrentIndex = dynamic(() => import("./ExamCurrentIndex"), {
  ssr: false,
});

const Exam = () => {
  const [state, dispatch] = useReducer(examReducer, loadInitialState());

  useEffect(() => {
    if (ExamData) {
      dispatch({ type: "SET_EXAM_INFO", payload: ExamData });
      dispatch({ type: "SET_QUESTIONS", payload: ExamData.questions });
    }
  }, [ExamData]);

  if (!ExamData) return null;

  return (
    <main className="bg-indigo-600 w-full min-h-screen mx-auto ">
      <div className="w-full h-full container mx-auto py-10 px-4">
        <ExamHeader examInfo={state.exam_info} />
        <div className="w-full flex flex-col items-center justify-center">
          <ExamCurrentIndex
            currentIndex={state.currentIndex}
            total={state.questions?.length}
            dispatch={dispatch}
          />
          <ExamQuestion
            question={state.questions[state.currentIndex]}
            currentIndex={state.currentIndex}
            answer={state.examOptions[state.currentIndex]}
            dispatch={dispatch}
          />
        </div>
      </div>
    </main>
  );
};

export default Exam;
