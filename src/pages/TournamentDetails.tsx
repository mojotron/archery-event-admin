import { useNavigate, useParams } from "react-router";
import {
  MdArrowBack as IconBack,
  // MdEditDocument as IconEdit,
} from "react-icons/md";
import PageHeading from "../components/ui/PageHeading";
import ButtonIcon from "../components/ui/ButtonIcon";
import useTournament from "../hooks/useTournament";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import TournamentInfo from "../components/tournaments/TournamentInfo";
import Paragraph from "../components/ui/Paragraph";
import NavigateCommands from "../components/general/NavigateCommands";
import AddToListHeader from "../components/general/AddToListHeader";
import Scandinavian3DScores from "../components/scorecards/Scandinavian3DScores";

const TournamentDetails = () => {
  const { tournamentId } = useParams() as {
    tournamentId: string;
  };
  const navigate = useNavigate();

  const { tournament, isLoading, isError, isSuccess } =
    useTournament(tournamentId);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch tournament data</p>}

      {isSuccess && tournament && (
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <aside className="space-y-4 w-full sm:w-[600px]">
            <header>
              <ButtonIcon
                label="go back"
                icon={<IconBack className="text-sec-blue-500" />}
                clickHandler={() =>
                  navigate(`/dashboard/seasons/${tournament.seasonId}`)
                }
              />
              <PageHeading>{tournament.title}</PageHeading>
              {tournament.description && (
                <Paragraph text={tournament.description} />
              )}
            </header>
            <TournamentInfo tournament={tournament} />
            <NavigateCommands label="tournament" />
          </aside>

          <section className="w-full">
            <AddToListHeader
              heading="Tournament Participants"
              formPath={`add-score-card/${tournament.season.type}`}
              showBtn={tournament.isFinished === false}
              btnLabel="add participant score"
            />
            {tournament.season.type === "scandinavian_3D" && (
              <Scandinavian3DScores />
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default TournamentDetails;
