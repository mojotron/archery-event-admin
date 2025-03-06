import { MdArrowBack as IconBack } from "react-icons/md";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router";

type Params = {
  path: string;
  replace?: boolean;
};

const ButtonGoBack = ({ path, replace = false }: Params) => {
  const navigate = useNavigate();

  return (
    <ButtonIcon
      label="go back"
      icon={<IconBack className="text-sec-blue-500" />}
      clickHandler={() => navigate(path, { replace })}
    />
  );
};

export default ButtonGoBack;
