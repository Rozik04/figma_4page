import { memo } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from "antd";

import "./style.css";

const { Title } = Typography;

const Register = () => {
  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-full bg-text-primary shadow rounded-2xl p-4">
        <Title
          className="text-center"
          style={{ fontFamily: "Inter" }}
          level={3}>
          Register
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          style={{ paddingTop: "10px" }}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
            style={{ fontWeight: "600" }}>
            <Input
              type="email"
              style={{ height: "45px" }}
              placeholder="Enter your Email"
            />
          </Form.Item>
          <Form.Item label={null}>
            <button
              type="submit"
              className="w-full h-[45px] text-[18px] font-[Inter] font-semibold bg-[#00727d] hover:bg-[#3dc2cf] rounded-lg text-text-primary transition-all">
              Send-Otp
            </button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(Register);
