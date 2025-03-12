// hooks
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
// api
import { register } from "../../lib/api";
// components
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";
import LinkCard from "./components/LinkCard";
import InputErrors from "./components/InputErrors";
// types
import { ResponseInputErrorsType } from "../../types/errorTypes";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: () => register(formData),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    formData.password !== formData.confirmPassword;

  if (isSuccess)
    return (
      <div className="p-4 flex flex-col items-center">
        <LinkCard
          message="Account created successfully, we sent you verification email. Please verify email to finish registration."
          linkPath="/login"
          linkText="Go to login page!"
        />
      </div>
    );

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Create New Account</PageHeading>
      <Form onSubmit={mutate}>
        {/* TODO input errors */}
        {isError && (
          <InputErrors response={error as unknown as ResponseInputErrorsType} />
        )}

        <FormInput
          type="text"
          label="first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <FormInput
          type="text"
          label="last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <FormInput
          type="email"
          label="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          label="create account"
          isLoading={isPending}
          isDisabled={buttonDisabled}
        />
      </Form>

      <LinkCard
        message="Already have account?"
        linkPath="/login"
        linkText="Login!"
      />
    </div>
  );
};

export default Register;
