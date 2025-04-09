import { useNavigate, useParams } from "react-router";
import ConfirmDelete from "../../components/general/ConfirmDelete";
import { useMutation } from "@tanstack/react-query";
import { deleteTournament } from "../../lib/api";

const TournamentDelete = () => {
  const navigate = useNavigate();
  const { tournamentId } = useParams() as { tournamentId: string };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => deleteTournament(tournamentId),
    onSuccess: () => navigate(-1),
  });

  return (
    <ConfirmDelete
      heading="delete tournament"
      errorMessage={error?.message}
      isError={isError}
      isPending={isPending}
      text="You are about to delete tournament from database. Are you sure?"
      onConfirm={mutate}
      onCancel={() => navigate(-1)}
    />
  );
};

export default TournamentDelete;
