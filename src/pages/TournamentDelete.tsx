import useTournament from "../hooks/useTournament";
import { useParams, useNavigate } from "react-router";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PageHeading from "../components/ui/PageHeading";
import ButtonIcon from "../components/ui/ButtonIcon";
import ConfirmDelete from "../components/general/ConfirmDelete";
// icons
import { MdArrowBack as IconBack } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { deleteTournament } from "../lib/api";

const TournamentDelete = () => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const navigate = useNavigate();
  const { tournament, isLoading, isError, isSuccess } =
    useTournament(tournamentId);

  const {
    mutate,
    isPending,
    isError: isDeleteError,
  } = useMutation({
    mutationFn: () => deleteTournament(tournamentId),
    onSuccess: () => navigate(`/dashboard/seasons/${tournament?.seasonId}`),
  });

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch tournament data</p>}

      {isSuccess && tournament && (
        <>
          <header className="flex flex-col items-center">
            <h2 className="font-source-code-pro font-bold text-xl text-main-300">
              delete options for tournament
            </h2>
            <PageHeading>{tournament.title}</PageHeading>
          </header>
          <section>
            {tournament.isFinished === true ? (
              <div className="flex flex-col gap-4 items-center">
                <h3 className="font-bold font-source-code-pro uppercase tracking-wide text-main-300 text-2xl">
                  Attention!
                </h3>
                <p className="text-main-100 text-lg">
                  Season is active and already have archers. You must delete
                  each tournament before you can delete season!
                </p>
                <ButtonIcon
                  label="go back"
                  icon={<IconBack />}
                  clickHandler={() =>
                    navigate(`/dashboard/tournaments/${tournamentId}`, {
                      replace: true,
                    })
                  }
                />
              </div>
            ) : (
              <ConfirmDelete
                heading="delete season"
                text="Are you about to delete this tournament. This process in
                  permanent! Are you sure?"
                onConfirm={mutate}
                onCancel={() =>
                  navigate(`/dashboard/tournaments/${tournamentId}`)
                }
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

export default TournamentDelete;
