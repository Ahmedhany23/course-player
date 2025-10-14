import { ICourse } from "@/types/course";

export const COURSE_DATA: ICourse = {
  id: "seo-home-business",
  title: "Starting SEO as your Home Based Business",
  videoUrl: "https://www.youtube.com/watch?v=3Gc7AhihHNc",
  poster: "/images/poster.png",
  url: "/courses/seo-home-business",
  progress: 63,
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Course Details" },
  ],
  meta: {
    duration: "3 weeks",
    lessons: 8,
    enrolled: 65,
    language: "English",
  },
  topics: [
    {
      range: "Week 1-4",
      paragraph:
        "Advanced Story Telling Techniques personas ,Characters & Plots",
      courseList: [
        { label: "Introduction", isLock: false, isExam: false },
        {
          label: "Course Overview",
          isLock: true,
          isExam: false,
          pdfUrl: "/pdf/AhmedHany_FrontDev.pdf",
        },
        {
          label: "Course Overview",
          isLock: true,
          isExam: true,
          questions_count: 10,
          exam_time: 10,
        },
      ],
    },
    {
      range: "Week 5-8",
      paragraph:
        "Advanced Story Telling Techniques personas ,Characters & Plots",
      courseList: [
        { label: "Introduction", isLock: true, isExam: false },
        {
          label: "Course Overview",
          isLock: true,
          isExam: false,
          pdfUrl: "/pdf/AhmedHany_FrontDev.pdf",
        },
        {
          label: "Course Overview",
          isLock: true,
          isExam: true,
          questions_count: 10,
          exam_time: 10,
        },
      ],
    },
    {
      range: "Week 9-12",
      paragraph:
        "Advanced Story Telling Techniques personas ,Characters & Plots",
      courseList: [
        { label: "Introduction", isLock: true, isExam: false },
        {
          label: "Course Overview",
          isLock: true,
          isExam: false,
          pdfUrl: "/pdf/AhmedHany_FrontDev.pdf",
        },
        {
          label: "Course Overview",
          isLock: true,
          isExam: true,
          questions_count: 10,
          exam_time: 10,
        },
      ],
    },
  ],
  authorTag: "Sherif Ali",
  comments: [
    {
      avatar:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "John Doe",
      date: "2 days ago",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      name: "John Doe",
      date: "2 days ago",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores.",
    },
  ],
};
