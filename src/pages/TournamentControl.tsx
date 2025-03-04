import { useNavigate, useParams } from "react-router";
import {
  MdArrowBack as IconBack,
  // MdEditDocument as IconEdit,
} from "react-icons/md";
import PageHeading from "../components/ui/PageHeading";
import ButtonIcon from "../components/ui/ButtonIcon";
import useTournament from "../hooks/useTournament";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import HighlightRecord from "../components/ui/HighlightRecord";

const TournamentControl = () => {
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
        <>
          <header>
            <ButtonIcon
              label="go back"
              icon={<IconBack className="text-sec-blue-500" />}
              clickHandler={() =>
                navigate(`/dashboard/seasons/${tournament.seasonId}`)
              }
            />
            <PageHeading>{tournament.title}</PageHeading>
          </header>
          <div className="flex gap-4">
            <aside>
              <HighlightRecord
                regular="organized by"
                highlighted={tournament.organizedBy}
              />
              <HighlightRecord
                regular="location"
                highlighted={tournament.location}
              />
            </aside>
            <section>
              <h3>Score Board</h3>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default TournamentControl;
