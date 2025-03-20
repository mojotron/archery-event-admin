import { useNavigate } from "react-router";
import SeasonListCard from "./components/SeasonListCard";
import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiArcheryTarget, GiDeer, GiTrophiesShelf } from "react-icons/gi";
import SectionHeading from "../../components/ui/SectionHeading";
import { RulesEnum } from "../../types/ruleType";
import useSeasonList from "../../hooks/season/useSeasonList";

const Seasons = () => {
  const navigate = useNavigate();

  const { seasons } = useSeasonList({
    type: RulesEnum.scandinavian3D,
    filter: "active",
  });

  return (
    <div className="px-4 w-full">
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

        {seasons && (
          <ul className="mb-4 w-full space-y-1">
            {seasons?.map((season) => (
              <SeasonListCard key={season.id} season={season} />
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-4 border-t border-main-500 pt-4">
        <SectionHeading>World Archery Target</SectionHeading>
        <ButtonIcon
          icon={<GiArcheryTarget className="text-xl text-sec-green-500" />}
          label="create new season"
          clickHandler={() => navigate(`${RulesEnum.worldArchery}/create`)}
        />
      </section>
    </div>
  );
};

export default Seasons;
