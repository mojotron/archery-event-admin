// components
import { useNavigate } from "react-router";
import ButtonIcon from "../../components/ui/ButtonIcon";
import { GiBowman } from "react-icons/gi";
import ArchersList from "./components/ArchersList";

const Archers = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 w-full">
      <ButtonIcon
        label="create new archer"
        icon={<GiBowman className="text-2xl text-sec-green-500" />}
        clickHandler={() => navigate("create")}
      />

      <ArchersList />
    </div>
  );
};

export default Archers;
