import { ChangeEvent } from "react";
import { RulesEnum } from "../../types/rulesType";
import FormSelect from "./FormSelect";

type Props = {
  currentRule: RulesEnum;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const rules = Object.values(RulesEnum).map((value) => ({
  label: value,
  value,
}));

const SelectRules = ({ currentRule, name, onChange }: Props) => {
  return (
    <FormSelect
      defaultValue={currentRule}
      label={name}
      name={name}
      options={rules}
      handleChange={onChange}
    />
  );
};

export default SelectRules;
