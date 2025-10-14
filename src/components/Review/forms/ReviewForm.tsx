import { Button, Col, Form, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { memo } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ReviewForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { comment: string }) => {
    console.log("Submitted comment:", values.comment);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} className="max-w-3xl">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            name="comment"
            rules={[{ required: true, message: "Please enter your comment" }]}
          >
            <TextArea rows={4} placeholder="Write a comment" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block >
              Submit Review <FaLongArrowAltRight />
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default memo(ReviewForm);
