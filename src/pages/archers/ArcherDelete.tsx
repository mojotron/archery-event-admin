import { useNavigate, useParams } from "react-router";
import ConfirmDelete from "../../components/general/ConfirmDelete";
import { useMutation } from "@tanstack/react-query";
import { deleteArcher } from "../../lib/api";

const ArcherDelete = () => {
  const { archerId } = useParams() as { archerId: string };
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => deleteArcher(archerId),
    onSuccess: () => navigate(`/dashboard/archers/`, { replace: true }),
  });

  return (
    <div>
      <ConfirmDelete
        heading="delete archer"
        text="You are about to delete archer from the database. Are you sure?"
        onConfirm={mutate}
        onCancel={() =>
          navigate(`/dashboard/archers/${archerId}`, { replace: true })
        }
        isPending={isPending}
        isError={isError}
      />
    </div>
  );
};

export default ArcherDelete;
