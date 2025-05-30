import { memo, type FC } from "react";
import { Input, Typography, type GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const VerifyOTP: FC<{ email: string }> = ({ email }) => {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log({ email, otp: text });
  };

  const sharedProps: OTPProps = { onChange };

  return (
    <section>
      <div className="max-w-[500px] w-full bg-text-primary shadow rounded-2xl p-10 text-center flex flex-col items-center gap-2.5">
        <Title level={5}>
          <span className="font-[Inter] font-semibold text-2xl">
            Enter the SMS-Code
          </span>
        </Title>
        <div className="pb-4">
          <p className="font-[Inter]">
            Enter the SMS-Code, which is we send to this email
          </p>
        </div>
        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      </div>
    </section>
  );
};

export default memo(VerifyOTP);
