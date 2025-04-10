import { ChangeEvent } from "react";
import FormSelect from "./FormSelect";
import useSeasonList from "../../hooks/season/useSeasonList";

type Props = {
  currentSeason: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectSeason = ({ currentSeason, name, onChange }: Props) => {
  const { seasons } = useSeasonList({});

  if (!seasons) return undefined;

  return (
    <FormSelect
      defaultValue={currentSeason}
      label={name}
      name={name}
      options={[
        { value: "--- pick season", label: "--- pick season" },
        ...seasons.map((season) => ({ value: season.id, label: season.title })),
      ]}
      handleChange={onChange}
    />
  );
};

export default SelectSeason;
