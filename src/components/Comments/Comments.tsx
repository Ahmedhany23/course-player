import { IComment, ICourse } from "@/types/course";
import { Avatar } from "antd";
import React, { memo } from "react";
import { FaUser } from "react-icons/fa";

const Comments = ({ course }: { course: ICourse }) => {
  return (
    <section className="flex flex-col gap-2 w-full max-w-3xl">
      <h3 className="font-semibold text-3xl font-league-spartan">Comments</h3>
      {course.comments?.map((comment, idx: number) => (
        <CommentCard key={idx} comment={comment} />
      ))}
    </section>
  );
};

export default memo(Comments);

const CommentCard = ({ comment }: { comment: IComment }) => {
  return (
    <div className="flex items-center gap-2 py-3 border-b border-gray-300 flex-wrap">
      <div className="flex gap-10 md:flex-row flex-col px-2   ">
        <Avatar icon={<FaUser />} src={comment.avatar} alt="avatar" size={90} />
        <div className="flex flex-col">
          <span className=" text-2xl font-semibold font-league-spartan text-gray-600">
            {comment.name}
          </span>
          <span className=" font-league-spartan text-gray-500">
            {comment.date}
          </span>
          <p className=" text-gray-500 text-base font-semibold">
            {comment.comment}
          </p>
        </div>
      </div>
    </div>
  );
};
