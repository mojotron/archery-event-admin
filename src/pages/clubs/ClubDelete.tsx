import { useNavigate, useParams } from "react-router";
import ConfirmDelete from "../../components/general/ConfirmDelete";
import { useMutation } from "@tanstack/react-query";
import { deleteClub } from "../../lib/api";

const pathBack = "/dashboard/clubs";

const ClubDelete = () => {
  const { clubId } = useParams() as { clubId: string };
  const navigate = useNavigate();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: () => deleteClub(clubId),
    onSuccess: () => navigate(pathBack, { replace: true }),
  });

  return (
    <div>
      <ConfirmDelete
        heading="delete club"
        text="You are about to delete club from the database. Are you sure?"
        onConfirm={mutate}
        onCancel={() => navigate(pathBack, { replace: true })}
        isPending={isPending}
        isError={isError}
      />
    </div>
  );
};

export default ClubDelete;
