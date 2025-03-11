import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import PageHeading from "../ui/PageHeading";
import Form from "../ui/Form";
import LinkCard from "./LinkCard";
import InputErrors from "./InputErrors";
import FormInput from "../ui/FormInput";

import Button from "../ui/Button";
import { ResponseInputErrorsType } from "../../types/errorTypes";
import { passwordReset } from "../../lib/api";

const ResetPasswordForm = ({ code }: { code: string }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: () =>
      passwordReset({
        password: formData.password,
        verificationCode: code,
      }),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled =
    !formData.password ||
    formData.password.length < 8 ||
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
      <Form onSubmit={mutate}>
        {isError && (
          <InputErrors response={error as unknown as ResponseInputErrorsType} />
        )}

        <FormInput
          type="password"
          label="new password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <FormInput
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
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
