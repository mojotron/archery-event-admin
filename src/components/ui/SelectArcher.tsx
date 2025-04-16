import { ChangeEvent } from "react";
import useArcherList from "../../hooks/useArcherList";
import FormSelect from "./FormSelect";

type Props = {
  selectedArcherId: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectArcher = ({ selectedArcherId, onChange }: Props) => {
  const { archers } = useArcherList();

  if (!archers) return undefined;

  const currentArcher = archers.find(
    (archer) => archer.id === selectedArcherId
  );

  return (
    <FormSelect
      defaultValue={
        currentArcher
          ? `${currentArcher.firstName} ${currentArcher.lastName}`
          : `--- pick archer`
      }
      label="select archer"
      name="archer"
      options={[
        { value: "", label: "--- pick archer" },
        ...archers.map((archer) => ({
          value: archer.id,
          label: `${archer.firstName} ${archer.lastName}`,
        })),
      ]}
      handleChange={onChange}
    />
  );
};

export default SelectArcher;
