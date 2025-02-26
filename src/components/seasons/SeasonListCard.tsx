import { SeasonType } from "../../types/seasonType";
import Button from "../ui/Button";

type Props = {
  season: SeasonType;
};

const SeasonListCard = ({ season }: Props) => {
  return (
    <li className="bg-main-500 px-4 py-2 rounded-md">
      <h5 className="text-main-100">{season.title}</h5>
      <p>{season.description}</p>
      <p>
        {season.tournaments}/{season.tournamentCount}
      </p>
      <Button label="open" />
    </li>
  );
};

export default SeasonListCard;
