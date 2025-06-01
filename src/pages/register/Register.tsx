import { memo } from "react";
import { Form, Button, Input, Typography, Select } from "antd";
import type { FormProps } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useRegisterMutation } from "../../redux/api/auth.api";
import { useGetRegionsQuery } from "../../redux/api/region.api";
import toast from "react-hot-toast";

const { Title } = Typography;

type FieldType = {
  email?: string;
  firstname?: string;
  lastname?: string;
  regionId?: string;
  password?: string;
  img?: string;
};

const Register = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const { data } = useGetRegionsQuery({});
  const options = data?.data?.map((region: any) => ({
    value: region.id,
    label: region.name,
  }));
  const [registerUser, { isLoading, isError }] = useRegisterMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    values.img = "https://image";
    registerUser(values)
      .unwrap()
      .then(() => toast.success("Registered successfully !"))
      .catch((error) => toast.error(`${error}`));
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-full bg-text-primary shadow rounded-2xl p-4">
        <Title
          className="text-center"
          style={{ fontFamily: "Inter" }}
          level={3}>
          Register
        </Title>

        <Form
          name="basic"
          initialValues={{ email }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          style={{ paddingTop: "10px" }}>
          <Form.Item<FieldType>
            label="FirstName"
            name="firstname"
            rules={[
              { required: true, message: "Please input your FirstName!" },
            ]}
            style={{ fontWeight: "600" }}>
            <Input
              type="text"
              style={{ height: "45px" }}
              placeholder="Enter your FirstName"
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="LastName"
            name="lastname"
            rules={[{ required: true, message: "Please input your LastName!" }]}
            style={{ fontWeight: "600" }}>
            <Input
              type="text"
              style={{ height: "45px" }}
              placeholder="Enter your LastName"
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Region"
            name="regionId"
            rules={[{ required: true, message: "Please input your LastName!" }]}
            style={{ fontWeight: "600" }}>
            <Select
              defaultValue="Select a Region"
              style={{ width: "100%", height: "45px" }}
              options={options}
            />
          </Form.Item>

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
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
      {isError && toast.error("Something went wrong !")}
    </section>
  );
};

export default memo(Register);
