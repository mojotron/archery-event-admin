import { ChangeEvent } from "react";

type Props = {
  label: string;
  name: string;
  options: string[];
  defaultValue: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const FormSelect = ({
  label,
  name,
  options,
  handleChange,
  defaultValue,
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-md font-inter text-main-100" htmlFor={name}>
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        onChange={handleChange}
        id={name}
        name={name}
        className="shadow-xs bg-main-500 border border-main-900 text-gray-100 text-sm rounded-lg focus:ring focus:ring-sec-blue-500 focus:border-sec-blue-500 w-full px-4 py-2.5 outline-none"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
