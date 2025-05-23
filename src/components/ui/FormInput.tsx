import { ChangeEvent } from "react";

type Params = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "datetime-local";
  required?: boolean;
};

const FormInput = ({
  type,
  label,
  name,
  value,
  onChange,
  required = true,
}: Params) => {
  return (
    <div className="w-full">
      <label className="text-md font-inter text-main-100" htmlFor={name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="shadow-xs bg-main-500 border border-main-900 text-gray-100 text-sm rounded-lg focus:ring focus:ring-sec-blue-500 focus:border-sec-blue-500 w-full px-4 py-2.5 outline-none"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {value}
        </textarea>
      ) : (
        <input
          className="shadow-xs bg-main-500 border border-main-900 text-gray-100 text-sm rounded-lg focus:ring focus:ring-sec-blue-500 focus:border-sec-blue-500 w-full px-4 py-2.5 outline-none"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default FormInput;
