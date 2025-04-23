import { useParams, useNavigate } from "react-router";
import useArcher from "../../hooks/archers/useArcher";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import PageHeading from "../../components/ui/PageHeading";
import HighlightRecord from "../../components/ui/HighlightRecord";
import CreatedAt from "../../components/general/CreatedAt";
import UpdatedAt from "../../components/general/UpdatedAt";
import IconEdit from "../../components/ui/IconEdit";
import IconDelete from "../../components/ui/IconDelete";
import SectionHeading from "../../components/ui/SectionHeading";
import ScorecardList from "./components/ScorecardList";
import ButtonGoBack from "../../components/ui/ButtonGoBack";

const ArcherDetails = () => {
  const navigate = useNavigate();
  const { archerId } = useParams() as { archerId: string };
  const { archer, isLoading, isError } = useArcher(archerId);

  return (
    <div className="px-4">
      <ButtonGoBack path="/dashboard/archers" />
      <PageHeading>archer details</PageHeading>
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch archer data" />}
      {archer && (
        <div className="pt-2 flex gap-8">
          <aside className="flex-none">
            <HighlightRecord
              regular="full name"
              highlighted={`${archer.firstName} ${archer.lastName}`}
            />
            <HighlightRecord regular="username" highlighted={archer.username} />
            <HighlightRecord
              regular="email"
              highlighted={archer.email ? archer.email : "undefined"}
            />
            <HighlightRecord
              regular="public"
              highlighted={`${archer.public}`}
            />

            <CreatedAt date={archer.createdAt} />
            <UpdatedAt date={archer.updatedAt} />

            <HighlightRecord
              regular="club"
              highlighted={archer.club ? archer.club.name : "none"}
            />
            <div className="pt-4 space-x-2">
              <IconEdit onEdit={() => navigate("edit")} />
              <IconDelete onDelete={() => navigate("delete")} />
            </div>
          </aside>
          <section className="flex-1">
            <SectionHeading>scorecards</SectionHeading>
            {archer.scorecards && (
              <ScorecardList scorecards={archer.scorecards} />
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default ArcherDetails;
