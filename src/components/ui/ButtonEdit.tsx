import ButtonIcon from "./ButtonIcon";
import { MdEditDocument as IconEdit } from "react-icons/md";

type Props = {
  clickHandler: () => void;
};

const ButtonEdit = ({ clickHandler }: Props) => {
  return (
    <ButtonIcon label="edit" clickHandler={clickHandler} icon={<IconEdit />} />
  );
};

export default ButtonEdit;
