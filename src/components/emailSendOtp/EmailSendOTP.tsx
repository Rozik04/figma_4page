import { memo, type FC } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from "antd";
import toast from "react-hot-toast";

const { Title } = Typography;

interface EmailSendOTPProps {
  setEmail: (p: string) => void;
  isLoading: boolean;
  isError: boolean;
}

type FieldType = {
  email: string;
};

const EmailSendOTP: FC<EmailSendOTPProps> = ({
  setEmail,
  isLoading,
  isError,
}) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setEmail(values.email || "");
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#e0f7fa] to-[#ffffff]">
      <div className="max-w-[500px] w-full bg-white shadow-xl rounded-3xl px-6 py-8">
        <Title
          className="text-center"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            color: "#00727d",
          }}
          level={3}>
          Register
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="pt-4">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your Email!" }]}
            className="font-semibold">
            <Input
              type="email"
              className="h-[45px] rounded-lg border border-gray-300 px-4 focus:border-[#00727d] transition-all"
              placeholder="Enter your Email"
            />
          </Form.Item>
          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full rounded-lg transition-all bg-gradient-to-r from-cyan-600 to-blue-500 hover:opacity-90 text-white font-semibold text-[16px] h-[45px] font-[Inter]">
              Send OTP
            </Button>
          </Form.Item>
        </Form>
        {isError && toast.error("You are already registered!")}
      </div>
    </section>
  );
};

export default memo(EmailSendOTP);
