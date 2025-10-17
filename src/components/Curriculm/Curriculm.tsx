import React from "react";
import AskQuestion from "./AskQuestion";
import Link from "next/link";
import { FaStar, FaExpand, FaCompress } from "react-icons/fa";
import { ICourse } from "@/types/course";
import Leaderboard from "./Leaderboard";

type Props = {
  course: ICourse;
  setWideScreen: React.Dispatch<React.SetStateAction<boolean>>;
  wideScreen: boolean;
};

const Curriculm = ({ course, setWideScreen, wideScreen }: Props) => {
  return (
    <section className="flex flex-wrap items-center gap-4 animate-fadeIn">
      <Link
        href={"#review"}
        className="bg-white border border-gray-200 w-10 h-10 rounded-full group hover:!bg-gray-500 transition-all flex items-center justify-center duration-300"
      >
        <FaStar className="text-gray-500 text-xl group-hover:text-white" />
      </Link>

      <button
        onClick={() => setWideScreen(!wideScreen)}
        className="bg-white hidden md:flex border cursor-pointer border-gray-200 w-10 h-10 rounded-full hover:bg-gray-500 transition-all  items-center justify-center duration-300"
        title={wideScreen ? "Exit Wide Screen" : "Wide Screen"}
      >
        {wideScreen ? (
          <FaCompress className="text-gray-500 text-xl group-hover:!text-white" />
        ) : (
          <FaExpand className="text-gray-500 text-xl group-hover:!text-white" />
        )}
      </button>

      <AskQuestion />
      <Leaderboard course={course} />
    </section>
  );
};

export default Curriculm;
