import { useParams } from "react-router";
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

const SeasonDetails = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError } = useSeason(seasonId);

  return (
    <div className="px-4">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch season details" />}
      {season && (
        <>
          <header className="flex justify-between">
            <div>
              <SectionHeading>season details</SectionHeading>
              <PageHeading>{season.title}</PageHeading>
            </div>
            <div>
              <IconDelete onDelete={() => {}} />
              <IconEdit onEdit={() => {}} />
            </div>
          </header>
          <main className="flex gap-8">
            <aside>
              <CreatedAt date={season.createdAt} />
              <UpdatedAt date={season.updatedAt} />
            </aside>
            <TournamentList tournaments={season.tournaments} />
          </main>
        </>
      )}
    </div>
  );
};

export default SeasonDetails;
