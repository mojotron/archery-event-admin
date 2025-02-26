import useSeasonList from "../../hooks/useSeasonList";
import { SeasonFilterType } from "../../types/seasonType";
import LoadingSpinner from "../ui/LoadingSpinner";
import SeasonListCard from "./SeasonListCard";

type Params = {
  title: string;
  filter: SeasonFilterType;
};

const SeasonList = ({ title, filter }: Params) => {
  const { seasons, isLoading, isError, isSuccess } = useSeasonList(filter);

  return (
    <div>
      <h3 className="font-passion-one text-main-300 text-2xl uppercase">
        {title}
      </h3>

      {isLoading && <LoadingSpinner />}
      {isError && <p>could not fetch season list...</p>}

      {isSuccess && (
        <ul className="mb-4 w-full space-y-1">
          {seasons?.map((season) => (
            <SeasonListCard key={season.id} season={season} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeasonList;
