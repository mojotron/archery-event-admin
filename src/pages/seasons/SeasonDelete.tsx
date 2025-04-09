import { useNavigate, useParams } from "react-router";
import ConfirmDelete from "../../components/general/ConfirmDelete";
import { useMutation } from "@tanstack/react-query";
import { deleteSeason } from "../../lib/api";

const SeasonDelete = () => {
  const navigate = useNavigate();
  const { seasonId } = useParams() as { seasonId: string };

  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: () => deleteSeason(seasonId),
    onSuccess: () => navigate("/dashboard/seasons"),
  });

  return (
    <ConfirmDelete
      heading="delete season"
      errorMessage={error?.message}
      isError={isError}
      isPending={isPending}
      text="You are about to delete season from database. Are you sure?"
      onConfirm={mutate}
      onCancel={() =>
        navigate(`/dashboard/seasons/${seasonId}`, { replace: true })
      }
    />
  );
};

export default SeasonDelete;
