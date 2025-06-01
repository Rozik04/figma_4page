import { memo, type FC } from "react";
import { Input, Typography, type GetProps } from "antd";
import { useVerifyOtpMutation } from "../../redux/api/auth.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../redux/features/auth.slice";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const VerifyOTP: FC<{ email: string }> = ({ email }) => {
  const [verifyOtp, { isLoading, isError }] = useVerifyOtpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange: OTPProps["onChange"] = (text) => {
    verifyOtp({ email, otp: text })
      .unwrap()
      .then(() => {
        dispatch(setAuth({ email }));
        navigate("/register");
      });
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
          <p className="font-[Inter] text-[16px]">
            Enter the SMS-Code, which is we send to this email{" "}
            <span className="text-red-600">{email}</span>
          </p>
        </div>
        <Input.OTP
          disabled={isLoading}
          formatter={(str) => str.toUpperCase()}
          {...sharedProps}
        />
        {isError && (
          <p className="text-red-600 font-[Inter] mt-2.5 font-medium">
            Wrong Email or OTP Code !
          </p>
        )}
      </div>
    </section>
  );
};

export default memo(VerifyOTP);
