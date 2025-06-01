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
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full rounded-lg text-text-primary transition-all"
              style={{
                backgroundColor: "#00727d",
                borderColor: "#00727d",
                height: "45px",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: "500",
              }}>
              Send-OTP
            </Button>
          </Form.Item>
        </Form>
        {isError && toast.error("You are already registered!")}
      </div>
    </section>
  );
};

export default memo(EmailSendOTP);
