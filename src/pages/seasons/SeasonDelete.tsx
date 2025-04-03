import { useParams } from "react-router";
import ConfirmDelete from "../../components/general/ConfirmDelete";

const SeasonDelete = () => {
  const { sesoneId } = useParams() as { seasonId: string };

  return (
    <ConfirmDelete
      heading="delete season"
      text="You are about to delete season from database. Are you sure?"
      onConfirm={() => {}}
      onCancel={() => {}}
    />
  );
};

export default SeasonDelete;
