import { ChangeEvent } from "react";
import { RulesEnum } from "../../types/rulesType";
import FormSelect from "./FormSelect";

type Props = {
  selectedRule: RulesEnum | undefined;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const rules = Object.values(RulesEnum).map((value) => ({
  label: value,
  value,
}));

const SelectRules = ({ selectedRule, onChange }: Props) => {
  return (
    <FormSelect
      defaultValue={selectedRule || "---pick rules"}
      label="select rules"
      name="rules"
      options={[{ value: "", label: "--- pick rules" }, ...rules]}
      handleChange={onChange}
    />
  );
};

export default SelectRules;
