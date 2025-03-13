import { GiGearHammer } from "react-icons/gi";

type Props = {
  onEdit: () => void;
};

const IconEdit = ({ onEdit }: Props) => {
  return (
    <button
      title="edit"
      type="button"
      onClick={onEdit}
      className="cursor-pointer text-3xl text-main-300 hover:text-sec-green-300"
    >
      <GiGearHammer />
    </button>
  );
};

export default IconEdit;
