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
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#e3f2fd] to-[#ffffff]">
      <div className="max-w-[500px] w-full bg-white shadow-xl rounded-3xl px-8 py-10 text-center flex flex-col items-center gap-5">
        <Title level={4} style={{ fontFamily: "Inter", color: "#00727d" }}>
          Enter the SMS Code
        </Title>

        <p className="font-[Inter] text-[16px] text-gray-600">
          Enter the code we sent to your email:{" "}
          <span className="text-[#d32f2f] font-semibold">{email}</span>
        </p>

        <Input.OTP
          disabled={isLoading}
          formatter={(str) => str.toUpperCase()}
          {...sharedProps}
          className="!w-full !max-w-[350px] otp-input"
        />

        {isError && (
          <p className="text-red-600 font-[Inter] font-medium mt-2">
            Wrong Email or OTP Code!
          </p>
        )}
      </div>
    </section>
  );
};

export default memo(VerifyOTP);
