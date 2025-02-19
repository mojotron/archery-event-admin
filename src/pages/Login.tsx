// hooks
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// api
import { postLoginUser } from "../lib/api";
// components
import PageHeading from "../components/ui/PageHeading";
import AuthForm from "../components/auth/AuthForm";
import FormInput from "../components/auth/AuthInput";
import Button from "../components/ui/Button";

import InputErrors, { InputError } from "../components/auth/InputErrors";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => postLoginUser({ ...formData }),
    onSuccess: () => navigate("/dashboard", { replace: true }),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const buttonDisabled = !formData.email || formData.password.length < 8;

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Login to your Account</PageHeading>
      <AuthForm handler={mutate}>
        {isError && <InputErrors error={error as unknown as InputError} />}

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
      </AuthForm>
    </div>
  );
};

export default Login;
