import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface ProgressProps {
  progress: number;
}

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <div className="w-full">
      {/* Progress bar container */}
      <div className="relative w-full h-1 bg-gray-200 rounded-full">
        {/* Filled bar */}
        <div
          className="h-1 bg-emerald-500 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />

        <div
          className="absolute -top-10 flex flex-col items-center"
          style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-8 h-8   flex items-center justify-center text-xm font-medium text-indigo-800 bg-white rounded-full  border border-gray-500">
            You
          </div>
          <IoMdArrowDropdown className="text-indigo-800" />
        </div>
        <div
          className="absolute -bottom-8 flex flex-col items-center"
          style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
        >
          <div className="mt-3 text-center text-sm font-semibold text-gray-700">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
