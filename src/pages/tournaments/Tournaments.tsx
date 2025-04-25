import ButtonIcon from "../../components/ui/ButtonIcon";
import SectionHeading from "../../components/ui/SectionHeading";
import { GiMagnifyingGlass } from "react-icons/gi";
import Form from "../../components/ui/Form";
import SelectRules from "../../components/ui/SelectRules";
import { RulesEnum } from "../../types/rulesType";
import { StatusEnum } from "../../types/statusType";
import { ChangeEvent, useState } from "react";
import SelectClub from "../../components/ui/SelectClub";
import SelectSeason from "../../components/ui/SelectSeason";
import FormRadio from "../../components/ui/FormRadio";
import TournamentSearchResults from "./components/TournamentSearchResults";

export type TournamentFilterType = {
  rules?: RulesEnum;
  status?: StatusEnum;
  clubId?: string;
  seasonId?: string;
};

const Tournaments = () => {
  const [filters, setFilters] = useState<TournamentFilterType>({});
  const [search, setSearch] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((oldState) => ({ ...oldState, [name]: value }));
    setSearch(false);
  };

  return (
    <div className="px-4 w-full pb-8">
      <section className="space-y-4 mb-8">
        <SectionHeading>Filter tournaments</SectionHeading>
        <Form onSubmit={() => setSearch(true)}>
          <SelectRules selectedRule={filters.rules} onChange={handleChange} />
          <SelectClub
            selectedClubId={filters.clubId || ""}
            onChange={handleChange}
          />
          <SelectSeason
            selectedSeasonId={filters.seasonId || ""}
            onChange={handleChange}
          />
          <FormRadio
            name="status"
            options={[
              { label: "finished", value: StatusEnum.finished },
              { label: "active", value: StatusEnum.active },
            ]}
            selected={filters.status || ""}
            handleChange={handleChange}
          />
          <ButtonIcon
            type="submit"
            label="filter"
            icon={<GiMagnifyingGlass />}
          />
        </Form>
      </section>

      {search && <TournamentSearchResults filters={filters} />}
    </div>
  );
};

export default Tournaments;
