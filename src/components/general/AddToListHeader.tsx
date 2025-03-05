import { useNavigate } from "react-router";
import ButtonIcon from "../ui/ButtonIcon";
import { MdAdd as IconAdd } from "react-icons/md";

type Props = {
  heading: string;
  formPath: string;
  showBtn: boolean;
  btnLabel?: string;
};

const AddToListHeader = ({
  heading,
  formPath,
  showBtn,
  btnLabel = "add",
}: Props) => {
  const navigate = useNavigate();
  return (
    <header className=" w-full flex items-baseline gap-2 justify-between">
      <h3 className="font-bold text-2xl text-main-100 uppercase">{heading}</h3>
      {showBtn && (
        <ButtonIcon
          label={btnLabel}
          icon={<IconAdd className="text-sec-green-500" />}
          clickHandler={() => navigate(formPath)}
        />
      )}
    </header>
  );
};

export default AddToListHeader;
