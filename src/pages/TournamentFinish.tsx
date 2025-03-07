import { useParams } from "react-router";
import useTournament from "../hooks/useTournament";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ButtonGoBack from "../components/ui/ButtonGoBack";
import PageHeading from "../components/ui/PageHeading";
import IsActiveStatus from "../components/general/IsActiveStatus";
import ToggleActiveForm from "../components/general/ToggleActiveForm";
import useTournamentUpdate from "../hooks/useTournamentUpdate";

const TournamentFinish = () => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament, isLoading, isError, isSuccess } =
    useTournament(tournamentId);
  const { updateTournament } = useTournamentUpdate(tournamentId);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch tournament data</p>}

      {isSuccess && tournament && (
        <>
          <header>
            <ButtonGoBack path={`/dashboard/tournaments/${tournamentId}`} />
            <PageHeading>{tournament.title}</PageHeading>
          </header>
          <section>
            <IsActiveStatus
              label="tournament"
              isActive={tournament.isFinished}
            />
            <ToggleActiveForm
              label="toggle tournament status"
              handleSubmit={() =>
                updateTournament({ isFinished: !tournament.isFinished })
              }
              isActive={tournament.isFinished}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default TournamentFinish;
