import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const buttonDisabled =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    formData.password !== formData.confirmPassword;

  return (
    <div className="flex flex-col items-center">
      <h1>Create New Account</h1>
      <form className="w-full sm:w-80" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="firstName">first name</label>
          <input
            className="px-2 py-0.5 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-emerald-300 focus:border-green-300"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={formData.firstName}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName">last name</label>
          <input
            className="px-2 py-0.5 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-emerald-300 focus:border-green-300"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={formData.lastName}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input
            className="px-2 py-0.5 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-emerald-300 focus:border-green-300"
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input
            className="px-2 py-0.5 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-emerald-300 focus:border-green-300"
            type="password"
            name="password"
            id="password"
            required
            value={formData.password}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword">confirm password</label>
          <input
            className="px-2 py-0.5 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-emerald-300 focus:border-green-300"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleFormDataChange}
          />
        </div>

        <button disabled={buttonDisabled} type="submit">
          Create Account
        </button>
      </form>

      <div className="flex item-center gap-1">
        <p>Already have an account,</p>
        <Link to="/login">Sign in!</Link>
      </div>
    </div>
  );
};

export default Register;
