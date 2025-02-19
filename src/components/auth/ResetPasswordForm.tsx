import { ChangeEvent, useState } from "react";
import PageHeading from "../ui/PageHeading";
import AuthForm from "./AuthForm";
import { useMutation } from "@tanstack/react-query";
import { postResetPassword } from "../../lib/api";
import AuthInput from "./AuthInput";
import Button from "../ui/Button";
import InputErrors, { InputError } from "./InputErrors";
import LinkCard from "./LinkCard";

const ResetPasswordForm = ({ code }: { code: string }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: () =>
      postResetPassword({
        password: formData.password,
        verificationCode: code,
      }),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled =
    !formData.password ||
    formData.password.length < 6 ||
    !formData.confirmPassword ||
    formData.password !== formData.confirmPassword;

  if (isSuccess) {
    return (
      <div className="p-4 flex flex-col items-center">
        <LinkCard
          message="Password updated successfully!"
          linkPath="/login"
          linkText="Go to login page!"
        />
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Change your password</PageHeading>
      <AuthForm handler={mutate}>
        {isError && <InputErrors error={error as unknown as InputError} />}

        <AuthInput
          type="password"
          label="new password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <AuthInput
          type="password"
          label="confirm new password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          label="reset password"
          isLoading={isPending}
          isDisabled={buttonDisabled}
        />
      </AuthForm>
    </div>
  );
};

export default ResetPasswordForm;
