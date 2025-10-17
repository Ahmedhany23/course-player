"use client";

import Comments from "@/components/Comments/Comments";
import CourseMaterials from "@/components/CourseMaterials/CourseMaterials";
import Curriculm from "@/components/Curriculm/Curriculm";
import ReviewForm from "@/components/Review/forms/ReviewForm";
import Topics from "@/components/Topics/Topics";

import { ICourse } from "@/types/course";
import { Col, Row, Skeleton } from "antd";
import React, { Suspense, useState, useEffect } from "react";

const VideoPlayer = React.lazy(
  () => import("@/components/VideoPlayer/VideoPlayer")
);

const CourseSection = ({ course }: { course: ICourse }) => {
  const [wideScreen, setWideScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCourseExtras = () => (
    <>
      <Suspense fallback={<Skeleton active paragraph={{ rows: 3 }} />}>
        <CourseMaterials course={course} />
      </Suspense>
      {!wideScreen && isMobile && <Topics course={course} />}
      <Suspense fallback={<Skeleton active paragraph={{ rows: 3 }} avatar />}>
        <Comments course={course} />
      </Suspense>
      <ReviewForm />
    </>
  );

  return (
    <Row
      gutter={[16, 16]}
      className="px-4 transition-all duration-600 ease-in-out"
    >
      <Col
        xs={24}
        md={{ order: 1, span: wideScreen ? 24 : 16 }}
        className="space-y-10 transition-all duration-500 ease-in-out !h-fit"
      >
        <div
          className={`   inset-0 z-10 bg-black transition-all duration-500 ease-in-out
            ${isMobile ? "sticky" : ""}
            ${wideScreen ? "w-full" : "w-full md:w-[95%]"}
          `}
        >
          <Suspense fallback={<Skeleton.Image active />}>
            <VideoPlayer
              src={course.videoUrl}
              poster={course.poster}
              className={`rounded-xl ${
                wideScreen ? "aspect-[25/9]" : "aspect-video"
              }`}
            />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton.Avatar key={i} active size="large" shape="circle" />
              ))}
            </div>
          }
        >
          <Curriculm
            course={course}
            setWideScreen={setWideScreen}
            wideScreen={wideScreen}
          />
        </Suspense>

        {!wideScreen && (
          <div className="flex flex-col gap-10">{renderCourseExtras()}</div>
        )}
      </Col>

      {wideScreen && (
        <Col
          xs={24}
          md={{ order: 2, span: 12 }}
          className="transition-all duration-500 ease-in-out flex flex-col gap-10"
        >
          {renderCourseExtras()}
        </Col>
      )}

      {!isMobile && (
        <Col
          xs={24}
          md={{ order: wideScreen ? 3 : 2, span: 8 }}
          className="transition-all duration-500 ease-in-out mx-auto"
        >
          <Topics course={course} />
        </Col>
      )}
    </Row>
  );
};

export default CourseSection;
