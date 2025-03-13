import { GiTrashCan } from "react-icons/gi";

type Props = {
  onDelete: () => void;
};

const IconDelete = ({ onDelete }: Props) => {
  return (
    <button
      title="delete"
      type="button"
      onClick={onDelete}
      className="cursor-pointer text-3xl text-main-300 hover:text-error"
    >
      <GiTrashCan />
    </button>
  );
};

export default IconDelete;
