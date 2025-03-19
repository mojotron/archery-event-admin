import { useNavigate } from "react-router";
import SeasonList from "../../components/seasons/SeasonList";
import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiArcheryTarget, GiDeer } from "react-icons/gi";
import SectionHeading from "../../components/ui/SectionHeading";
import { RulesEnum } from "../../types/ruleType";

const Seasons = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 w-full flex gap-8">
      <section className="space-y-4">
        <SectionHeading>Scandinavian 3D</SectionHeading>
        <ButtonIcon
          icon={<GiDeer className="text-xl text-sec-green-500" />}
          label="create new season"
          clickHandler={() => navigate(`${RulesEnum.scandinavian3D}/create`)}
        />

        <SeasonList title="active seasons" filter="active" />
      </section>

      <section className="space-y-4">
        <SectionHeading>World Archery Target</SectionHeading>
        <ButtonIcon
          icon={<GiArcheryTarget className="text-xl text-sec-green-500" />}
          label="create new season"
          clickHandler={() => navigate(`${RulesEnum.worldArchery}/create`)}
        />
        <SeasonList title="finished seasons" filter="finished" />
      </section>
    </div>
  );
};

export default Seasons;
