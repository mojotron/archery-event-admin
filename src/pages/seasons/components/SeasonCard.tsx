import ButtonIcon from "../../../components/ui/ButtonIcon";
import { SeasonType } from "../../../types/seasonType";

type Props = {
  season: SeasonType;
};

const SeasonCard = ({ season }: Props) => {
  return (
    <li className="p-4 flex justify-between">
      <h3 className="text-2xl text-gray-100 font-passion-one">
        {season.title}
      </h3>
      <ButtonIcon icon={""} label="open season" />
    </li>
  );
};

export default SeasonCard;
