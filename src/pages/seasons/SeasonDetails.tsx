import { useNavigate, useParams } from "react-router";
import useSeason from "../../hooks/season/useSeason";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import PageHeading from "../../components/ui/PageHeading";
import SectionHeading from "../../components/ui/SectionHeading";
import IconDelete from "../../components/ui/IconDelete";
import IconEdit from "../../components/ui/IconEdit";
import CreatedAt from "../../components/general/CreatedAt";
import UpdatedAt from "../../components/general/UpdatedAt";
import TournamentList from "./components/TournamentList";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import Paragraph from "../../components/ui/Paragraph";
import HighlightRecord from "../../components/ui/HighlightRecord";
import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiTargetArrows } from "react-icons/gi";

const SeasonDetails = () => {
  const navigate = useNavigate();
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError } = useSeason(seasonId);

  return (
    <div className="px-4">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch season details" />}

      <ButtonGoBack path="/dashboard/seasons" />

      {season && (
        <main className="flex pt-2 gap-8">
          <aside className="space-y-2">
            <header>
              <SectionHeading>season details</SectionHeading>
              <PageHeading>{season.title}</PageHeading>
            </header>
            <Paragraph text={season.description} />
            <div>
              <CreatedAt date={season.createdAt} />
              <UpdatedAt date={season.updatedAt} />
              <HighlightRecord
                regular="tournament progress"
                highlighted={`${season.tournaments.length} / ${season.tournamentCount}`}
              />
              <div className="space-x-2 font-inter text-lg">
                <span className="text-main-300">season status</span>
                {season.isFinished ? (
                  <span className="uppercase text-sec-blue-500">finished</span>
                ) : (
                  <span className="uppercase text-sec-green-500">active</span>
                )}
              </div>
            </div>
            <div className="space-x-2">
              <IconEdit onEdit={() => navigate(`edit`)} />
              <IconDelete onDelete={() => navigate(`delete`)} />
            </div>
          </aside>

          <section>
            <header className="space-y-2">
              <SectionHeading>tournaments</SectionHeading>
              <ButtonIcon
                label="create new tournament"
                icon={<GiTargetArrows />}
                clickHandler={() =>
                  navigate(`/dashboard/tournaments/create?seasonId=${seasonId}`)
                }
              />
            </header>
            <TournamentList tournaments={season.tournaments} />
          </section>
        </main>
      )}
    </div>
  );
};

export default SeasonDetails;
