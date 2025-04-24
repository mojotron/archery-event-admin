// hooks
import useSeasonList from "../../../hooks/season/useSeasonList";
// types
import type { RulesEnum } from "../../../types/rulesType";
import type { StatusEnum } from "../../../types/statusType";
// components
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
        <ul className="space-y-2">
          {seasons.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </ul>
      )}

      {seasons && seasons.length === 0 && (
        <p className="pl-4 font-source-code-pro text-lg text-main-500">
          no seasons found
        </p>
      )}
    </div>
  );
};

export default SeasonList;
