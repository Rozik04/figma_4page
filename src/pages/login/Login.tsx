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
      .then(() => toast.success("Logged In successfully !"))
      .catch(() => toast.error("Wrong Password !"));

      navigate("/")
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-full bg-text-primary shadow rounded-2xl p-4">
        <Title
          className="text-center"
          style={{ fontFamily: "Inter" }}
          level={3}>
          Login
        </Title>
        <Form
          name="basic"
          initialValues={{ email }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          style={{ paddingTop: "10px" }}>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
            style={{ fontWeight: "600" }}>
            <Input
              type="email"
              style={{ height: "45px" }}
              placeholder="Enter your Email"
              disabled={true}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            style={{ fontWeight: "600" }}>
            <Input.Password
              type="password"
              style={{ height: "45px" }}
              placeholder="Enter your Password"
              //   disabled={true}
            />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              loading={isLoading}
              htmlType="submit"
              className="w-full rounded-lg text-text-primary transition-all"
              style={{
                backgroundColor: "#00727d",
                borderColor: "#00727d",
                height: "45px",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: "500",
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
