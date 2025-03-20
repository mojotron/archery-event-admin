import { SeasonType } from "../../../types/seasonType";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router";
import HighlightRecord from "../../../components/ui/HighlightRecord";
import { createdAtDate, dateDistanceFrom } from "../../../utils/dateFormat";

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
        <p className="text text-main-300 font-inter mb-2 text-md">
          {season.description}
        </p>
      </div>
      <div className="space-y-1">
        <HighlightRecord
          regular="progress"
          highlighted={`${season.tournaments.length}/${season.tournamentCount}`}
        />
        <HighlightRecord
          regular="created at"
          highlighted={createdAtDate(season.createdAt)}
        />
        <HighlightRecord
          regular="last update"
          highlighted={dateDistanceFrom(season.updatedAt)}
        />
        <Button
          type="button"
          label="manage"
          clickHandler={() => navigate(`${season.id}`)}
        />
      </div>
    </li>
  );
};

export default SeasonListCard;
