"use client";

import { ITopic } from "@/types/course";
import { useRouter } from "next/navigation";
import { CiLock, CiUnlock } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { Collapse } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  topic: ITopic;
  setOpenCoursePdf: React.Dispatch<
    React.SetStateAction<{ open: boolean; src: string }>
  >;
};

export const CourseList = ({ topic, setOpenCoursePdf }: Props) => {
  const router = useRouter();

  const items = [
    {
      key: "1",
      label: (
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold font-league-spartan">
            {topic.range}
          </h5>
          <p className="text-gray-600">{topic.paragraph}</p>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-4">
          {topic?.courseList?.map((course, idx: number) => (
            <div
              key={idx}
              className="py-3 border-t border-b border-gray-300 flex items-center justify-between cursor-pointer hover:bg-gray-100"
              onClick={() => {
                if (course.pdfUrl) {
                  setOpenCoursePdf({ open: true, src: course.pdfUrl });
                }
                if (course.isExam) {
                  router.push("/exam");
                }
              }}
            >
              <div className="flex items-center gap-2">
                <FaRegFileAlt className="text-gray-500" />
                <p className="text-gray-700 text-md">{course.label}</p>
              </div>

              {course.isExam && (
                <div className="flex items-center flex-wrap gap-1">
                  <div className="px-2 py-1 text-md bg-green-100 text-green-400">
                    {course.questions_count} QUESTION
                  </div>
                  <div className="px-2 py-1 text-md bg-red-100 text-red-400">
                    {course.exam_time} MINUTES
                  </div>
                </div>
              )}

              {course.isLock ? (
                <CiLock className="text-black text-xl" />
              ) : (
                <CiUnlock className="text-black text-xl" />
              )}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Collapse
      bordered={false}
      className="max-w-[424px] w-full !border !rounded-none !border-gray-300 !bg-white animate-fadeIn"
      defaultActiveKey={["1"]}
      expandIconPosition="end"
      expandIcon={({ isActive }) =>
        isActive ? (
          <AiOutlineMinus className="text-xl text-gray-600" />
        ) : (
          <AiOutlinePlus className="text-xl text-gray-600" />
        )
      }
      items={items}
    />
  );
};
