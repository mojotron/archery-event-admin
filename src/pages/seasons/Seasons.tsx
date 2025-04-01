import { useNavigate } from "react-router";
import SeasonList from "./components/SeasonList";
import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiArcheryTarget, GiTrophiesShelf } from "react-icons/gi";
import SectionHeading from "../../components/ui/SectionHeading";
import { RulesEnum } from "../../types/rulesType";
import { StatusEnum } from "../../types/statusType";

const Seasons = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 w-full pb-8">
      <div className="flex justify-end">
        <ButtonIcon
          icon={<GiArcheryTarget className="text-xl text-sec-green-500" />}
          label="create new season"
          clickHandler={() => navigate(`${RulesEnum.scandinavian3D}/create`)}
        />
        <ButtonIcon
          label="finished seasons"
          clickHandler={() => navigate("")}
          icon={<GiTrophiesShelf className="text-xl " />}
        />
      </div>

      <section className="space-y-4">
        <SectionHeading>Scandinavian 3D</SectionHeading>
        <SeasonList
          rules={RulesEnum.scandinavian3D}
          status={StatusEnum.active}
        />
      </section>

      <section className="space-y-4 border-t border-main-500 pt-4">
        <SectionHeading>World Archery Target</SectionHeading>
        <SeasonList rules={RulesEnum.worldArchery} status={StatusEnum.active} />
      </section>
    </div>
  );
};

export default Seasons;
