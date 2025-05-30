import { memo, useState } from "react";
import EmailSendOTP from "../../components/email-send-otp/EmailSendOTP";
import VerifyOTP from "../../components/otp/VerifyOTP";

const Register = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {true ? (
        <EmailSendOTP setEmail={setEmail} />
      ) : (
        <VerifyOTP email={email} />
      )}
    </div>
  );
};

export default memo(Register);
