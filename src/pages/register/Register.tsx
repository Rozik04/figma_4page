import { memo, useState } from "react";
import { Form, Button, Input, Typography, Select, Upload } from "antd";
import type { FormProps } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useRegisterMutation } from "../../redux/api/auth.api";
import { useGetRegionsQuery } from "../../redux/api/region.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

export type FieldType = {
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
  const navigate = useNavigate();

  const [imageBase64, setImageBase64] = useState<string>("");

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const beforeUpload = (file: File) => {
    handleImageChange(file);
    return false; 
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    values.img = imageBase64 || "https://image";
    registerUser(values)
      .unwrap()
      .then(() => toast.success("Registered successfully !"))
      .catch((error) => toast.error(`${error}`));

    navigate("/login");
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[500px] w-full bg-text-primary shadow rounded-2xl p-4">
        <Title className="text-center" style={{ fontFamily: "Inter" }} level={3}>
          Register
        </Title>

        <Form
          name="basic"
          initialValues={{ email }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          style={{ paddingTop: "10px" }}
        >
          <Form.Item<FieldType>
            label="FirstName"
            name="firstname"
            rules={[{ required: true, message: "Please input your FirstName!" }]}
          >
            <Input placeholder="Enter your FirstName" style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="LastName"
            name="lastname"
            rules={[{ required: true, message: "Please input your LastName!" }]}
          >
            <Input placeholder="Enter your LastName" style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Region"
            name="regionId"
            rules={[{ required: true, message: "Please select your Region!" }]}
          >
            <Select
              placeholder="Select a Region"
              style={{ width: "100%", height: "45px" }}
              options={options}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input type="email" disabled={true} style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Enter your Password" style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item label="Profile Image (optional)">
            <Upload beforeUpload={beforeUpload} maxCount={1} showUploadList={true}>
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full rounded-lg"
              style={{
                backgroundColor: "#00727d",
                borderColor: "#00727d",
                height: "45px",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
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
