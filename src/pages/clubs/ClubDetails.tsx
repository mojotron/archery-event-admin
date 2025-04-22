import { useParams, useNavigate } from "react-router";
import useClub from "../../hooks/clubs/useClub";
import PageHeading from "../../components/ui/PageHeading";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import HighlightRecord from "../../components/ui/HighlightRecord";
import CreatedAt from "../../components/general/CreatedAt";
import UpdatedAt from "../../components/general/UpdatedAt";
import IconEdit from "../../components/ui/IconEdit";
import IconDelete from "../../components/ui/IconDelete";
import TournamentList from "../../components/general/TournamentList";
import SectionHeading from "../../components/ui/SectionHeading";

const ClubDetails = () => {
  const navigate = useNavigate();
  const { clubId } = useParams() as { clubId: string };
  const { club, isLoading, isError } = useClub(clubId);

  return (
    <div className="px-4">
      <PageHeading>club details</PageHeading>
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch club data" />}
      {club && (
        <div className="pt-2 flex gap-8">
          <aside className="flex-none">
            <HighlightRecord regular="club name" highlighted={club.name} />
            <HighlightRecord regular="address" highlighted={club.address} />

            <CreatedAt date={club.createdAt} />
            <UpdatedAt date={club.updatedAt} />
            <div className="pt-4 space-x-2">
              <IconEdit onEdit={() => navigate("edit")} />
              <IconDelete onDelete={() => navigate("delete")} />
            </div>
          </aside>

          <section className="flex-1">
            <SectionHeading>tournaments</SectionHeading>
            {club.tournaments && (
              <TournamentList tournaments={club.tournaments} />
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default ClubDetails;
