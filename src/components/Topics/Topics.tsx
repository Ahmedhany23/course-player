"use client";

import { ICourse } from "@/types/course";
import React from "react";
import Progress from "../Progress/Progress";
import { CourseList } from "../CourseList/CourseList";
import PdfModal from "../PdfModel/PdfModel";

type Props = {
  course: ICourse;
};

const Topics = ({ course }: Props) => {
  const [openCoursePdf, setOpenCoursePdf] = React.useState({
    open: false,
    src: "",
  });

  return (
    <article className="flex flex-col gap-10   md:!sticky inset-0">
      <h3 className="text-2xl md:text-3xl font-medium font-league-spartan ">
        Topics for This Course
      </h3>
      <Progress progress={course?.progress || 0} />
      <div className="flex flex-col w-full items-end gap-10">
        {course.topics?.map((topic, idx: number) => (
          <CourseList
            key={idx}
            topic={topic}
            setOpenCoursePdf={setOpenCoursePdf}
          />
        ))}
      </div>

      <PdfModal
        open={openCoursePdf.open}
        src={openCoursePdf.src}
        onClose={() => setOpenCoursePdf({ open: false, src: "" })}
      />
    </article>
  );
};

export default Topics;
