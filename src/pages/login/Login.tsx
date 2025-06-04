import { Button, Form, Input, type FormProps, Typography } from "antd";
import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useLoginMutation } from "../../redux/api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export type FieldType = {
  email?: string;
  firstname?: string;
  lastname?: string;
  regionId?: string;
  password?: string;
  img?: string;
};

const Login = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const [loginAuth, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    loginAuth(values)
      .unwrap()
      .then(() => toast.success("Logged in successfully!"))
      .catch(() => toast.error("Wrong Password!"));

    navigate("/");
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#e3f2fd] to-[#ffffff]">
      <div className="max-w-[500px] w-full bg-white shadow-xl rounded-3xl px-8 py-10 text-center flex flex-col gap-5">
        <Title
          className="text-center"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "28px",
            color: "#00727d",
          }}>
          Welcome Back
        </Title>

        <p className="text-[16px] font-[Inter] text-gray-600 mb-4">
          Please login to your account
        </p>

        <Form
          name="basic"
          initialValues={{ email }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="w-full">
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your Email!" }]}>
            <Input
              type="email"
              placeholder="Enter your Email"
              style={{
                height: "45px",
                fontFamily: "Inter",
                fontSize: "15px",
              }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your Password!" }]}>
            <Input.Password
              type="password"
              placeholder="Enter your Password"
              style={{
                height: "45px",
                fontFamily: "Inter",
                fontSize: "15px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full rounded-lg transition-all"
              style={{
                backgroundColor: "#00727d",
                borderColor: "#00727d",
                height: "45px",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: 500,
              }}>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(Login);
