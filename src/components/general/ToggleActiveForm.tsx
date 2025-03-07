import Form from "../ui/Form";
import ButtonIcon from "../ui/ButtonIcon";
// icons
import { FaLockOpen as IconOpen, FaLock as IconClose } from "react-icons/fa";

type Props = {
  handleSubmit: () => void;
  isActive: boolean;
  label: string;
  labelActive?: string;
  labelInactive?: string;
};

const ToggleActiveForm = ({
  handleSubmit,
  isActive,
  label,
  labelActive = "close",
  labelInactive = "open",
}: Props) => {
  return (
    <Form handler={handleSubmit}>
      <h3 className="font-bold text-main-300 text-lg">{label}</h3>
      <ButtonIcon
        label={isActive ? labelInactive : labelActive}
        type="submit"
        icon={isActive ? <IconOpen /> : <IconClose />}
      />
    </Form>
  );
};

export default ToggleActiveForm;
