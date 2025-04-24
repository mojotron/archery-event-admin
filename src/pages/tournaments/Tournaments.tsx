import ButtonIcon from "../../components/ui/ButtonIcon";
import SectionHeading from "../../components/ui/SectionHeading";
import { GiMagnifyingGlass } from "react-icons/gi";
import Form from "../../components/ui/Form";
import SelectRules from "../../components/ui/SelectRules";
import { RulesEnum } from "../../types/rulesType";
import { StatusEnum } from "../../types/statusType";
import { useState } from "react";
import SelectClub from "../../components/ui/SelectClub";
import SelectSeason from "../../components/ui/SelectSeason";
import FormRadio from "../../components/ui/FormRadio";

type FormStatus = {
  rules?: RulesEnum;
  status?: StatusEnum;
  clubId?: string;
  seasonId?: string;
};

const Tournaments = () => {
  const [filters, setFilters] = useState<FormStatus>({});

  return (
    <div className="px-4 w-full pb-8">
      <section className="space-y-4 mb-8">
        <SectionHeading>Filter tournaments</SectionHeading>
        <Form onSubmit={() => {}}>
          <SelectRules selectedRule={filters.rules} onChange={() => {}} />
          <SelectClub
            selectedClubId={filters.clubId || ""}
            onChange={() => {}}
          />
          <SelectSeason
            selectedSeasonId={filters.seasonId || ""}
            onChange={() => {}}
          />
          <FormRadio
            name="season status"
            options={[
              { label: "finished", value: StatusEnum.finished },
              { label: "active", value: StatusEnum.active },
            ]}
            selected={""}
            handleChange={(e) => console.log(e)}
          />
          <ButtonIcon
            type="submit"
            label="filter"
            icon={<GiMagnifyingGlass />}
          />
        </Form>
      </section>
    </div>
  );
};

export default Tournaments;
