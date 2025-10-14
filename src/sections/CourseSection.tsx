"use client";
import Comments from "@/components/Comments/Comments";
import CourseMaterials from "@/components/CourseMaterials/CourseMaterials";
import Curriculm from "@/components/Curriculm/Curriculm";
import ReviewForm from "@/components/Review/forms/ReviewForm";

import { ICourse } from "@/types/course";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import { Comme } from "next/font/google";
import React, { Activity, Suspense, useState } from "react";

const VideoPlayer = React.lazy(
  () => import("@/components/VideoPlayer/VideoPlayer")
);

const Topics = dynamic(() => import("@/components/Topics/Topics"), { ssr: false });

const CourseSection = ({ course }: { course: ICourse }) => {
  const [wideScreen, setWideScreen] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Row
      gutter={[16, 16]}
      className="px-4 transition-all duration-600 ease-in-out "
    >
      <Col
        xs={24}
        md={{ order: 1, span: wideScreen ? 24 : 16 }}
        className="space-y-10 transition-all duration-500 ease-in-out !h-fit  "
      >
        <div
          className={`transition-all duration-500 ease-in-out md:block md:inset-auto sticky inset-0 z-10 bg-black
            ${wideScreen ? "w-full" : "w-full md:w-[95%]"}
          `}
        >
          <Suspense fallback={<div>Loading player…</div>}>
            <VideoPlayer
              src={course.videoUrl}
              poster={course.poster}
              className={`rounded-xl ${
                wideScreen ? "aspect-[25/9]" : "aspect-video"
              }`}
            />
          </Suspense>
        </div>

        <Curriculm
          course={course}
          setWideScreen={setWideScreen}
          wideScreen={wideScreen}
        />
        {!wideScreen && (
          <div className={` flex flex-col gap-10`}>
            <CourseMaterials course={course} />
            {isMobile && <Topics course={course} />}
            <Comments course={course} />
            <ReviewForm />
          </div>
        )}
      </Col>

      {wideScreen && (
        <Col
          xs={24}
          md={{ order: wideScreen ? 2 : 3, span: wideScreen ? 12 : 24 }}
          className={`transition-all duration-500 ease-in-out !flex flex-col gap-10 `}
        >
          <CourseMaterials course={course} />
          <Comments course={course} />
          <ReviewForm />
        </Col>
      )}

      {!isMobile && (
        <Col
          xs={24}
          md={{ order: wideScreen ? 3 : 2, span: 8 }}
          className={`transition-all duration-500 ease-in-out  mx-auto  `}
        >
          <Topics course={course} />
        </Col>
      )}
    </Row>
  );
};

export default CourseSection;
