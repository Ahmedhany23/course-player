"use client";

import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const { TextArea } = Input;

const AskQuestion: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values: { question: string }) => {
    console.log("Submitted question:", values.question);
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <button
        className="bg-white border cursor-pointer border-gray-200 w-10 h-10 rounded-full group hover:!bg-gray-500 transition-all flex items-center justify-center duration-300"
        onClick={() => setOpen(true)}
      >
        <IoChatboxEllipsesOutline className="text-gray-500 text-xl group-hover:text-white" />
      </button>

      <Modal
        title="Ask a Question"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="question"
            rules={[{ required: true, message: "Please enter your question" }]}
          >
            <TextArea rows={4} placeholder="Type your question here..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit Question <FaLongArrowAltRight />
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AskQuestion;
