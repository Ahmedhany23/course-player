import BreadCrumbNav from "@/components/BreadcrumbNav/BreadCrumbNav";
import { COURSE_DATA } from "@/constants/courses";

import React, { Suspense } from "react";

const CourseSection = React.lazy(() => import("@/sections/CourseSection"));

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
          <BreadCrumbNav items={course.breadcrumbs || []} />
          <h1 className="text-3xl md:text-5xl font-medium font-league-spartan ">
            {course.title || "Course Player"}
          </h1>
        </div>
      </header>
      <section className="container mx-auto py-3 ">
        <Suspense fallback={<div>Loading player…</div>}>
          <CourseSection course={course} />
        </Suspense>
      </section>
    </main>
  );
}
