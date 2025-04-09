import { useParams, useNavigate } from "react-router";
import useTournament from "../../hooks/tournaments/useTournament";
// components
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import SectionHeading from "../../components/ui/SectionHeading";
import PageHeading from "../../components/ui/PageHeading";
import Paragraph from "../../components/ui/Paragraph";
import CreatedAt from "../../components/general/CreatedAt";
import UpdatedAt from "../../components/general/UpdatedAt";
import AttendAt from "../../components/general/AttendAt";
import ActiveStatus from "../../components/general/ActiveStatus";
import HighlightRecord from "../../components/ui/HighlightRecord";
import ButtonIcon from "../../components/ui/ButtonIcon";
import IconEdit from "../../components/ui/IconEdit";
import IconDelete from "../../components/ui/IconDelete";
import { GiCardBurn } from "react-icons/gi";

const TournamentDetails = () => {
  const navigate = useNavigate();
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading, isError } = useTournament(tournamentId);

  return (
    <div className="px-4">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch season details" />}

      <ButtonGoBack />

      {tournament && (
        <main className="flex pt-2 gap-8">
          <aside className="space-y-2">
            <header>
              <SectionHeading>tournament details</SectionHeading>
              <PageHeading>{tournament.title}</PageHeading>
            </header>
            <Paragraph text={tournament.description} />
            <div>
              <CreatedAt date={tournament.createdAt} />
              <UpdatedAt date={tournament.createdAt} />
              <div className="space-x-2 mt-2">
                <IconEdit onEdit={() => navigate(`edit`)} />
                <IconDelete onDelete={() => navigate(`delete`)} />
              </div>
            </div>
            <div>
              <ActiveStatus
                label="tournament status"
                isFinished={tournament.isFinished}
              />

              <HighlightRecord regular="rules" highlighted={tournament.rules} />
              <HighlightRecord
                regular="rounds"
                highlighted={tournament.rounds.toString()}
              />
            </div>
            <div>
              <HighlightRecord
                regular="location"
                highlighted={tournament.address}
              />
              <HighlightRecord
                regular="organized by"
                highlighted={tournament.organizedBy?.name || "independent"}
              />

              <AttendAt date={tournament.createdAt} />
            </div>
          </aside>

          <section className="flex-1">
            <header className="space-y-2">
              <SectionHeading>scorecards</SectionHeading>
              <ButtonIcon
                label="add scorecard"
                icon={<GiCardBurn />}
                clickHandler={() => navigate(``)}
              />
            </header>

            {/* SCORE CARD LIST */}
          </section>
        </main>
      )}
    </div>
  );
};

export default TournamentDetails;
