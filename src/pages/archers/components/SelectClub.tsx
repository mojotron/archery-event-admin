import useClubs from "../../../hooks/useClubs";
import FormSelect from "../../../components/ui/FormSelect";
import { ChangeEvent } from "react";

type Props = {
  currentClub: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectClub = ({ currentClub, name, onChange }: Props) => {
  const { clubs } = useClubs();

  if (!clubs) return undefined;

  return (
    <FormSelect
      defaultValue={currentClub}
      label={name}
      name={name}
      options={[
        { value: "---pick club", label: "---pick club" },
        ...clubs.map((club) => ({ value: club.id, label: club.name })),
      ]}
      handleChange={onChange}
    />
  );
};

export default SelectClub;
