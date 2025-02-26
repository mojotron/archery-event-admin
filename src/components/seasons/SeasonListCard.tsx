import { SeasonType } from "../../types/seasonType";
import Button from "../ui/Button";
import { useNavigate } from "react-router";
import SeasonInfo from "./SeasonInfo";

type Props = {
  season: SeasonType;
};

const SeasonListCard = ({ season }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="bg-main-500 px-6 py-3 rounded-md flex justify-between">
      <div>
        <h5 className="text-main-100 font-passion-one text-2xl">
          {season.title}
        </h5>
        <p className="text-base text-white font-inter mb-2">
          {season.description}
        </p>
        <Button
          type="button"
          label="manage"
          clickHandler={() => navigate(`${season.id}`)}
        />
      </div>
      <SeasonInfo
        tournaments={season.tournaments}
        tournamentCount={season.tournamentCount}
        createdAt={season.createdAt}
        updatedAt={season.updatedAt}
        seasonType={season.type}
      />
    </li>
  );
};

export default SeasonListCard;
