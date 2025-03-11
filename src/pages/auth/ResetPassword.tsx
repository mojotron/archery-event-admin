import { useSearchParams } from "react-router";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
import LinkCard from "../../components/auth/LinkCard";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const expire = Number(searchParams.get("expire"));
  const now = Date.now();

  const isLinkValid = code && expire && expire > now;

  return (
    <div className="p-4 flex flex-col items-center">
      {isLinkValid ? (
        <ResetPasswordForm code={code} />
      ) : (
        <LinkCard
          message="Invalid or expired reset password link!"
          linkPath="/password/forgot"
          linkText="Request a new password reset link."
          replace={true}
        />
      )}
    </div>
  );
};

export default ResetPassword;
