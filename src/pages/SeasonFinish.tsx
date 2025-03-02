// hooks
import { useNavigate, useParams } from "react-router";
import useSeason from "../hooks/useSeason";
import useSeasonMutate from "../hooks/useSeasonMutate";
// components
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import ButtonIcon from "../components/ui/ButtonIcon";
// icons
import { FaLockOpen as IconOpen, FaLock as IconClose } from "react-icons/fa";
import { MdArrowBack as IconBack } from "react-icons/md";

const SeasonFinish = () => {
  const navigate = useNavigate();
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError, isSuccess } = useSeason(seasonId);
  const { updateSeason } = useSeasonMutate(seasonId);

  return (
    <div className="font-inter">
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch season data</p>}

      {isSuccess && season && (
        <>
          <ButtonIcon
            label="go back"
            icon={<IconBack className="text-sec-blue-500" />}
            clickHandler={() => navigate(`/dashboard/seasons/${seasonId}`)}
          />
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

          <div className="mt-8">
            <h3 className="font-bold uppercase text-main-100 text-2xl">
              Toggle season finish status
            </h3>
            <Form
              handler={() => updateSeason({ isFinished: !season.isFinished })}
            >
              <ButtonIcon
                label={season.isFinished ? "open season" : "close season"}
                type="submit"
                icon={season.isFinished ? <IconOpen /> : <IconClose />}
              />
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default SeasonFinish;
