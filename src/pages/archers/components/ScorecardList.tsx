import { useNavigate } from "react-router";
import { ScorecardInfoType } from "../../../types/scorecardType";
import ButtonIcon from "../../../components/ui/ButtonIcon";
import { GiCardPick } from "react-icons/gi";
import HighlightRecord from "../../../components/ui/HighlightRecord";

type Props = {
  scorecards: ScorecardInfoType[];
};

const ScorecardList = ({ scorecards }: Props) => {
  const navigate = useNavigate();

  return (
    <ul className="space-y-4">
      {scorecards.map((scorecard) => (
        <li
          className="p-4 border border-main-500 rounded space-y-2 flex justify-between items-start"
          key={scorecard.id}
        >
          <div>
            <HighlightRecord regular="rules" highlighted={scorecard.rules} />
            <HighlightRecord
              regular="tournament"
              highlighted={scorecard.tournament.title}
            />
            {scorecard.tournament.season && (
              <HighlightRecord
                regular="season"
                highlighted={scorecard.tournament.season.title}
              />
            )}
          </div>

          <ButtonIcon
            icon={<GiCardPick />}
            label="scorecard details"
            clickHandler={() =>
              navigate(`/dashboard/scorecards/${scorecard.id}`)
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ScorecardList;
