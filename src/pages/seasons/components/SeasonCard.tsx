import { useNavigate } from "react-router";
import CreatedAt from "../../../components/general/CreatedAt";
import UpdatedAt from "../../../components/general/UpdatedAt";
import ButtonIcon from "../../../components/ui/ButtonIcon";
import HighlightRecord from "../../../components/ui/HighlightRecord";
import { SeasonType } from "../../../types/seasonType";

type Props = {
  season: SeasonType;
};

const SeasonCard = ({ season }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="p-4 flex justify-between items-start border border-main-500 rounded-md">
      <div className="flex gap-8">
        <h3 className="text-2xl text-gray-100 font-passion-one">
          {season.title}
        </h3>
        <div>
          <CreatedAt date={season.createdAt} />
          <UpdatedAt date={season.updatedAt} />
          <HighlightRecord
            regular="progress"
            highlighted={`${season.tournaments?.length || 0} / ${
              season.tournamentCount
            }`}
          />
        </div>
      </div>
      <ButtonIcon
        clickHandler={() => navigate(`${season.id}`)}
        icon={""}
        label="open season"
      />
    </li>
  );
};

export default SeasonCard;
