import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";
import Timer from "../Timer/Timer";
import { IExam } from "./types";

const ExamHeader = ({ examInfo }: { examInfo: IExam }) => {
  return (
    <header className=" flex justify-between w-full items-center">
      <Link
        href={"/"}
        aria-label=" back "
        className="text-white cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out"
      >
        <IoIosArrowBack className="md:text-5xl text-3xl " />
      </Link>

      <div className="bg-yellow-300 rounded-md flex items-center justify-center gap-3 px-5 py-2 ">
        <TfiAlarmClock className="text-3xl text-white" />
        <Timer
          min={examInfo?.exam_time}
          state={examInfo}
          className="text-3xl text-white top-1 relative"
        />
      </div>
    </header>
  );
};

export default ExamHeader;
