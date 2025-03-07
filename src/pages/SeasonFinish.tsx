// hooks
import { useParams } from "react-router";
import useSeason from "../hooks/useSeason";
import useSeasonMutate from "../hooks/useSeasonMutate";
// components
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import IsActiveStatus from "../components/general/IsActiveStatus";
import ToggleActiveForm from "../components/general/ToggleActiveForm";
import ButtonGoBack from "../components/ui/ButtonGoBack";

const SeasonFinish = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError, isSuccess } = useSeason(seasonId);
  const { updateSeason } = useSeasonMutate(seasonId);

  return (
    <div className="font-inter">
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch season data</p>}

      {isSuccess && season && (
        <>
          <header>
            <ButtonGoBack path={`/dashboard/seasons/${seasonId}`} />
            <PageHeading>{season.title}</PageHeading>
          </header>
          <section>
            <IsActiveStatus label="season" isActive={season.isFinished} />

            <div className="space-x-1 text-xl text-main-300 mt-2">
              <span>tournaments finished</span>
              <span className="text-main-100 font-bold">
                {season.tournaments.length}
              </span>
            </div>

            <div className="space-x-1 text-xl text-main-300 mt-2">
              <span>tournaments in season</span>
              <span className="text-main-100 font-bold">
                {season.tournamentCount}
              </span>
            </div>

            <div className="space-x-1 text-xl text-main-300 mt-2">
              <span>season progress</span>
              <span className="text-main-100 font-bold">
                {(
                  (season.tournaments.length / season.tournamentCount) *
                  100
                ).toFixed(2)}
                %
              </span>
              <span>
                ({season.tournaments.length}/{season.tournamentCount})
              </span>
            </div>

            <ToggleActiveForm
              label="toggle season status"
              handleSubmit={() =>
                updateSeason({ isFinished: !season.isFinished })
              }
              isActive={season.isFinished}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default SeasonFinish;
