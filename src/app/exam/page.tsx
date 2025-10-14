import Exam from "@/components/Exam/Exam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exam",
  description: "Course Player",
};

const ExamPage = () => {
  return <Exam />;
};

export default ExamPage;
