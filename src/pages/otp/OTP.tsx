import { memo, useEffect, useState } from "react";
import EmailSendOTP from "../../components/emailSendOtp/EmailSendOTP";
import VerifyOTP from "../../components/otp/VerifyOTP";
import { useSendOtpMutation } from "../../redux/api/auth.api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [sendEmail, { isSuccess, isLoading, isError }] = useSendOtpMutation();

  useEffect(() => {
    if (email) {
      sendEmail({ email });
    }
  }, [email]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {isSuccess ? (
        <VerifyOTP email={email} />
      ) : (
        <EmailSendOTP
          setEmail={setEmail}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </div>
  );
};
export default memo(Register);
