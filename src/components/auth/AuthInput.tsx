import { ChangeEvent } from "react";

type Props = {
  label: string;
  type: "text" | "email" | "password";
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = ({ label, type, name, value, onChange }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-md font-inter text-main-100">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
        className="shadow-xs bg-main-500 border border-main-900 text-gray-100 text-sm rounded-lg focus:ring focus:ring-sec-blue-500 focus:border-sec-blue-500 w-full px-4 py-2.5 outline-none"
      />
    </div>
  );
};

export default AuthInput;
