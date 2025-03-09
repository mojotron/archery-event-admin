import { ChangeEvent } from "react";

export type RadioOptionType = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  selected: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options: RadioOptionType[];
};

const FormRadio = ({ name, options, selected, handleChange }: Props) => {
  return (
    <div>
      {options.map((opt) => (
        <div className="flex items-center gap-1" key={opt.value + name}>
          <input
            className="appearance-none w-3 h-3 bg-main-500 rounded-sm border border-main-300 checked:bg-sec-blue-500 cursor-pointer"
            type="radio"
            name={name}
            value={opt.value}
            id={opt.value}
            checked={selected === opt.value}
            onChange={handleChange}
          />
          <label
            className="font-inter font-bold tracking-widest text-main-300"
            htmlFor={opt.value}
          >
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FormRadio;
