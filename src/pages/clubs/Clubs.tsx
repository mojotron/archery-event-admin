// components
import { useNavigate } from "react-router";
import ButtonIcon from "../../components/ui/ButtonIcon";
import ClubsList from "./components/ClubsList";
import { GiBarracksTent } from "react-icons/gi";

const Clubs = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 w-full">
      <ButtonIcon
        label="create new club"
        icon={<GiBarracksTent className="text-2xl text-sec-green-500" />}
        clickHandler={() => navigate("create")}
      />

      <ClubsList />
    </div>
  );
};

export default Clubs;
