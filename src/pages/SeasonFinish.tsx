import { useParams } from "react-router";
import useSeason from "../hooks/useSeason";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import { SeasonDetailsType } from "../types/seasonType";
import Form from "../components/ui/Form";
import ButtonIcon from "../components/ui/ButtonIcon";
import { FaLockOpen as IconOpen, FaLock as IconClose } from "react-icons/fa";

const SeasonFinish = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError, isSuccess } = useSeason(seasonId);

  return (
    <div className="font-inter">
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch season data</p>}

      {isSuccess && season && (
        <>
          <PageHeading>{season.title}</PageHeading>
          <h2 className="text-2xl text-main-300">
            season status{" "}
            <span
              className={`${
                season.isFinished ? "text-sec-blue-500" : "text-sec-green-500"
              } uppercase font-bold`}
            >
              {season.isFinished ? "finished" : "ongoing"}
            </span>
          </h2>

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

          <Form handler={() => {}}>
            <h3></h3>
            <ButtonIcon
              label={season.isFinished ? "open season" : "close season"}
              type="submit"
              icon={<IconOpen />}
            />
          </Form>
        </>
      )}
    </div>
  );
};

export default SeasonFinish;
