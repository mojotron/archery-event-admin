// hooks
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// api
import { login } from "../../lib/api";
// components
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";

import InputErrors from "../../components/auth/InputErrors";
import { ResponseInputErrorsType } from "../../types/errorTypes";
import LinkCard from "../../components/auth/LinkCard";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => login({ ...formData }),
    onSuccess: () => navigate("/dashboard", { replace: true }),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled = !formData.email || formData.password.length < 8;

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Login to your Account</PageHeading>
      <Form onSubmit={mutate}>
        {isError && (
          <InputErrors response={error as unknown as ResponseInputErrorsType} />
        )}

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

        <Button
          label="Login"
          type="submit"
          isLoading={isPending}
          isDisabled={buttonDisabled}
        />
      </Form>

      <LinkCard
        message="Don't have an account?"
        linkPath="/register"
        linkText="Register."
      />

      <LinkCard
        message="Forgot password?"
        linkPath="/password/forgot"
        linkText="Reset."
      />
    </div>
  );
};

export default Login;
