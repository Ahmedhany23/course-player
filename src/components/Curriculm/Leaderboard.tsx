"use client";

import { motivationalMessages } from "@/constants/motivationalMessages";
import { ICourse } from "@/types/course";
import { Modal } from "antd";
import React, { useState } from "react";

interface Props {
  level: "excellent" | "veryGood" | "good" | "average" | "weak";
  visible: boolean;
  onClose: () => void;
  course: ICourse;
}

const Leaderboard = ({ course }: { course: ICourse }) => {
  const [visible, setVisible] = useState(false);

  const level: Props["level"] = "good";

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="bg-white border cursor-pointer border-gray-200 w-10 h-10 rounded-full group hover:!bg-gray-500 transition-all flex items-center justify-center duration-300"
      >
        💪
      </button>

      <LeaderboardMessageModal
        level={level}
        visible={visible}
        onClose={() => setVisible(false)}
        course={course}
      />
    </>
  );
};
export default Leaderboard;

const LeaderboardMessageModal: React.FC<Props> = ({
  level,
  visible,
  onClose,
  course,
}) => {
  const msg = motivationalMessages[level];

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      className="!text-center"
    >
      <h3 className="text-indigo-900 font-bold text-md mb-1">{course.title}</h3>
      <h2 className="text-indigo-800 font-bold mb-3 text-md">{msg.title}</h2>
      <p className="text-gray-600 leading-relaxed">{msg.message}</p>
    </Modal>
  );
};
