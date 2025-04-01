import useSeasonList from "../../../hooks/season/useSeasonList";
import { RulesEnum } from "../../../types/rulesType";
import { StatusEnum } from "../../../types/statusType";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import LoadingError from "../../../components/general/LoadingError";
import SeasonCard from "./SeasonCard";

type Props = {
  rules?: RulesEnum;
  status?: StatusEnum;
};
const SeasonList = ({ rules, status }: Props) => {
  const { seasons, isLoading, isError } = useSeasonList({ rules, status });

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch seasons" />}

      {seasons && (
        <ul>
          {seasons.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeasonList;
