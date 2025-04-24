import { useNavigate } from "react-router";
import SeasonList from "./components/SeasonList";
import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiTrophy } from "react-icons/gi";
import SectionHeading from "../../components/ui/SectionHeading";
import { RulesEnum } from "../../types/rulesType";
import { StatusEnum } from "../../types/statusType";

const FinishedSeasons = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 w-full pb-8">
      <div className="flex justify-end">
        <ButtonIcon
          label="active seasons"
          clickHandler={() => navigate("/dashboard/seasons")}
          icon={<GiTrophy className="text-xl " />}
        />
      </div>

      <section className="space-y-4 mb-8">
        <SectionHeading>Scandinavian 3D</SectionHeading>
        <SeasonList
          rules={RulesEnum.scandinavian3D}
          status={StatusEnum.finished}
        />
      </section>

      <section className="space-y-4 mb-8 border-t border-main-500 pt-4">
        <SectionHeading>World Archery Target</SectionHeading>
        <SeasonList
          rules={RulesEnum.worldArchery}
          status={StatusEnum.finished}
        />
      </section>

      <section className="space-y-4 mb-8 border-t border-main-500 pt-4">
        <SectionHeading>World Archery 3D</SectionHeading>
        <SeasonList
          rules={RulesEnum.worldArchery3D}
          status={StatusEnum.finished}
        />
      </section>
    </div>
  );
};

export default FinishedSeasons;
