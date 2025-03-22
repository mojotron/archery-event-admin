import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import useSeasonList from "../../../hooks/season/useSeasonsWA";
import { RulesEnum } from "../../../types/ruleType";
import SeasonListCard from "./SeasonListCard";

type Props = {
  type: RulesEnum;
};

const SeasonList = ({ type }: Props) => {
  const { seasons, isLoading } = useSeasonList({ type, filter: "active" });

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {seasons && (
        <ul className="mb-4 w-full space-y-1">
          {seasons?.map((season) => (
            <SeasonListCard key={season.id} season={season} />
          ))}
        </ul>
      )}
    </>
  );
};

export default SeasonList;
