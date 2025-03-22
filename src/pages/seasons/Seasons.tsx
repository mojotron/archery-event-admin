import { useNavigate } from "react-router";

import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiArcheryTarget, GiDeer, GiTrophiesShelf } from "react-icons/gi";
import SectionHeading from "../../components/ui/SectionHeading";
import { RulesEnum } from "../../types/ruleType";

import SeasonList from "./components/SeasonList";
import useSeasonsScan3D from "../../hooks/season/useSeasonsScan3D";

const Seasons = () => {
  const navigate = useNavigate();
  const { seasons } = useSeasonsScan3D({ filter: "active" });

  return (
    <div className="px-4 w-full pb-8">
      <div className="flex justify-end">
        <ButtonIcon
          label="finished seasons"
          clickHandler={() => navigate("")}
          icon={<GiTrophiesShelf className="text-xl " />}
        />
      </div>

      <section className="space-y-4">
        <SectionHeading>Scandinavian 3D</SectionHeading>
        <ButtonIcon
          icon={<GiDeer className="text-xl text-sec-green-500" />}
          label="create new season"
          clickHandler={() => navigate(`${RulesEnum.scandinavian3D}/create`)}
        />

        <SeasonList type={RulesEnum.scandinavian3D} />
      </section>

      <section className="space-y-4 border-t border-main-500 pt-4">
        <SectionHeading>World Archery Target</SectionHeading>
        <ButtonIcon
          icon={<GiArcheryTarget className="text-xl text-sec-green-500" />}
          label="create new season"
          clickHandler={() => navigate(`${RulesEnum.worldArchery}/create`)}
        />

        <SeasonList type={RulesEnum.worldArchery} />
      </section>
    </div>
  );
};

export default Seasons;
