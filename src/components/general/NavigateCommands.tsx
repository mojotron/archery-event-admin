// icons
import {
  MdDeleteForever as IconDelete,
  MdEditDocument as IconEdit,
  MdDoneAll as IconFinish,
} from "react-icons/md";
import ButtonIcon from "../ui/ButtonIcon";
import { useNavigate } from "react-router";

type Props = {
  label: string;
};

const NavigateCommands = ({ label }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <ButtonIcon
        clickHandler={() => navigate(`delete`)}
        label={`delete ${label}`}
        icon={<IconDelete className="text-error" />}
      />
      <ButtonIcon
        clickHandler={() => navigate(`edit`)}
        label={`edit ${label}`}
        icon={<IconEdit />}
      />
      <ButtonIcon
        clickHandler={() => navigate(`finish`)}
        label={`change ${label} status`}
        icon={<IconFinish className="text-sec-green-500" />}
      />
    </div>
  );
};

export default NavigateCommands;
