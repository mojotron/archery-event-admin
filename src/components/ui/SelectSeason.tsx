import { ChangeEvent } from "react";
import FormSelect from "./FormSelect";
import useSeasonList from "../../hooks/season/useSeasonList";

type Props = {
  selectedSeasonId: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectSeason = ({ selectedSeasonId, onChange }: Props) => {
  const { seasons } = useSeasonList({});

  if (!seasons) return undefined;

  const currentSeason = seasons.find(
    (season) => season.id === selectedSeasonId
  );

  return (
    <FormSelect
      defaultValue={currentSeason ? currentSeason.title : "--- pick season"}
      label="select season"
      name="seasonId"
      options={[
        { value: "", label: "--- pick season" },
        ...seasons.map((season) => ({ value: season.id, label: season.title })),
      ]}
      handleChange={onChange}
    />
  );
};

export default SelectSeason;
