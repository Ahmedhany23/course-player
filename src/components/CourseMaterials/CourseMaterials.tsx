import { ICourse } from "@/types/course";
import { Col, Row } from "antd";
import { memo } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";

const CourseMaterials = ({ course }: { course: ICourse }) => {
  return (
    <section className="flex flex-col gap-5 w-full max-w-3xl">
      <h3 className="font-semibold text-3xl font-league-spartan">
        Course Materials
      </h3>
      <Row gutter={[32, 32]} className="bg-white py-5 px-2 shadow-xl ">
        <Col xs={24} md={12}>
          <div className="w-full">
            <div className="flex justify-between items-center py-5 border-b border-gray-300 flex-wrap">
              <div className="flex gap-2 items-center text-xl  ">
                <CiClock2 />
                <span className=" text-md text-gray-400">Duration:</span>
              </div>
              <p className="text-md text-gray-500 font-semibold">
                {" "}
                {course.meta.duration} weeks{" "}
              </p>
            </div>
            <div className="flex justify-between items-center py-5  border-b border-gray-300 flex-wrap">
              <div className="flex gap-2 items-center text-xl  ">
                <RiBookShelfLine />
                <span className=" text-md text-gray-400">Lessons:</span>
              </div>
              <p className="text-md text-gray-500 font-semibold">
                {" "}
                {course.meta.lessons}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          {" "}
          <div className="w-full">
            <div className="flex justify-between items-center py-5  border-b border-gray-300 flex-wrap">
              <div className="flex gap-2 items-center text-xl  ">
                <FaBookReader />
                <span className=" text-md text-gray-400">Enrolled:</span>
              </div>
              <p className="text-md text-gray-500 font-semibold">
                {" "}
                {course.meta.enrolled} students
              </p>
            </div>
            <div className="flex justify-between items-center py-5  border-b border-gray-300 flex-wrap">
              <div className="flex gap-2 items-center text-xl  ">
                <AiOutlineGlobal />
                <span className=" text-md text-gray-400">Language:</span>
              </div>
              <p className="text-md text-gray-500 font-semibold">
                {" "}
                {course.meta.language}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default memo(CourseMaterials);
