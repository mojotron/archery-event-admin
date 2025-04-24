import useClubs from "../../hooks/clubs/useClubsList";
import FormSelect from "./FormSelect";
import { ChangeEvent } from "react";

type Props = {
  selectedClubId: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectClub = ({ selectedClubId, onChange }: Props) => {
  const { clubs } = useClubs();

  if (!clubs) return undefined;

  const currentClub = clubs.find((club) => club.id === selectedClubId);

  return (
    <FormSelect
      defaultValue={currentClub ? currentClub.name : "--- pick club"}
      label="select club"
      name="clubId"
      options={[
        { value: "", label: "--- pick club" },
        ...clubs.map((club) => ({ value: club.id, label: club.name })),
      ]}
      handleChange={onChange}
    />
  );
};

export default SelectClub;
