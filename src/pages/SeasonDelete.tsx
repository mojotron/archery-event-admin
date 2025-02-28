import { useNavigate, useParams } from "react-router";
import useSeason from "../hooks/useSeason";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import { useMutation } from "@tanstack/react-query";
import { deleteSeason } from "../lib/api";
import ConfirmDelete from "../components/general/ConfirmDelete";

const SeasonDelete = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const navigate = useNavigate();

  const { season, isLoading, isError, isSuccess } = useSeason(seasonId);
  const {
    mutate,
    isPending,
    isError: isDeleteError,
  } = useMutation({
    mutationFn: () => deleteSeason(seasonId),
    onSuccess: () => navigate("/dashboard/seasons", { replace: true }),
  });

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {isLoading && <LoadingSpinner />}
      {isError && <p>error fetching season data...</p>}

      {isSuccess && season && (
        <>
          <header className="flex flex-col items-center">
            <h2 className="font-source-code-pro font-bold text-xl text-main-300">
              delete options for
            </h2>
            <PageHeading>{season.title}</PageHeading>
          </header>
          <section>
            {season?.tournaments.length > 0 ? (
              <>
                <p>Season already have tournaments</p>
              </>
            ) : (
              <ConfirmDelete
                heading="delete season"
                text="Are you about to delete this season. This process in
                  permanent! Are you sure?"
                onConfirm={mutate}
                onCancel={() => navigate(`/dashboard/seasons/${seasonId}`)}
                isPending={isPending}
                isError={isDeleteError}
              />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default SeasonDelete;
