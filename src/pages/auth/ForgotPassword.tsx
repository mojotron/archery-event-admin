// hooks
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
// api
import { passwordForget } from "../../lib/api";
// components
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";
import InputErrors from "./components/InputErrors";
// types
import { ResponseInputErrorsType } from "../../types/errorTypes";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: () => passwordForget(email),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEmail(e.target.value);

  if (isSuccess) {
    return (
      <div className="p-8 flex flex-col items-center">
        <p className="font-source-code-pro text-md text-main-100">
          Email sent! check your inbox for further instructions.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Reset your password</PageHeading>
      <Form onSubmit={mutate}>
        {isError && (
          <InputErrors response={error as unknown as ResponseInputErrorsType} />
        )}

        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Button
          type="submit"
          label="reset password"
          isLoading={isPending}
          isDisabled={!email}
        />
      </Form>
    </div>
  );
};

export default ForgotPassword;
