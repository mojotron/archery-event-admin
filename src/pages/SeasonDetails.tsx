import { useParams } from "react-router";

import useSeason from "../hooks/useSeason";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import SeasonInfo from "../components/seasons/SeasonInfo";

const SeasonDetails = () => {
  const { seasonId } = useParams() as { seasonId: string };

  const { season, isLoading, isSuccess, isError } = useSeason(seasonId);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>unable to fetch season details...</p>}

      {isSuccess && season && (
        <>
          <header>
            <PageHeading>{season?.title}</PageHeading>
            <div>
              <span>edit</span>
              <span>delete</span>
              <span>complete</span>
            </div>
          </header>
          <SeasonInfo
            tournaments={season?.tournaments.length}
            tournamentCount={season?.tournamentCount}
            createdAt={season.createdAt}
            updatedAt={season.updatedAt}
            seasonType={season.type}
          />
          <section></section>
        </>
      )}
    </div>
  );
};

export default SeasonDetails;
