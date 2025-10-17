import { COURSE_DATA } from "@/constants/courses";
import { Skeleton } from "antd";

import React, { Suspense } from "react";

const CourseSection = React.lazy(() => import("@/sections/CourseSection"));

const BreadCrumbNav = React.lazy(
  () => import("@/components/BreadcrumbNav/BreadCrumbNav")
);

export default async function CoursePage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch the course data in a server-side function
  // const course = await getCourse(params.id);

  const course = COURSE_DATA;

  return (
    <main className=" relative  mx-auto  min-h-screen  ">
      <header className="bg-gray-100 relative">
        <div className=" flex flex-col   gap-4 p-4 container mx-auto">
          <Suspense fallback={<Skeleton active paragraph={{ rows: 0 }} />}>
            <BreadCrumbNav items={course.breadcrumbs || []} />
          </Suspense>
          <h1 className="text-3xl md:text-5xl font-medium font-league-spartan ">
            {course.title || "Course Player"}
          </h1>
        </div>
      </header>
      <section className="container mx-auto py-3 ">
        <CourseSection course={course} />
      </section>
    </main>
  );
}
