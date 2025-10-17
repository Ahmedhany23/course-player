"use client";

import { ICourse } from "@/types/course";
import React, { Suspense } from "react";
import Progress from "../Progress/Progress";
import { CourseList } from "../CourseList/CourseList";
import PdfModal from "../PdfModel/PdfModel";
import { Skeleton } from "antd";

type Props = {
  course: ICourse;
};

const Topics = ({ course }: Props) => {
  const [openCoursePdf, setOpenCoursePdf] = React.useState({
    open: false,
    src: "",
  });

  return (
    <article className="flex flex-col gap-10  animate-fadeIn  md:!sticky inset-0">
      <h3 className="text-2xl md:text-3xl font-medium font-league-spartan ">
        Topics for This Course
      </h3>

      <Suspense fallback={<Skeleton active paragraph={{ rows: 0 }} />}>
        <Progress progress={course?.progress || 0} />
      </Suspense>

      <div className="flex flex-col w-full items-end gap-10">
        <Suspense fallback={<Skeleton active />}>
          {course.topics?.map((topic, idx: number) => (
            <CourseList
              key={idx}
              topic={topic}
              setOpenCoursePdf={setOpenCoursePdf}
            />
          ))}
        </Suspense>
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
