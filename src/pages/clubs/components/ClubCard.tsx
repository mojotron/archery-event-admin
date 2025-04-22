import { ClubType } from "../../../types/clubTypes";
import { useNavigate } from "react-router";
import ButtonIcon from "../../../components/ui/ButtonIcon";
import { GiArrowhead } from "react-icons/gi";

type Props = {
  club: ClubType;
};

const ClubCard = ({ club }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="bg-main-500 px-6 py-4 flex gap-8 justify-between rounded-md">
      <div>
        <h3 className="text-main-100 font-bold text-xl">{club.name}</h3>
        <p className="text-lg text-main-300">{club.address}</p>
      </div>
      <div>
        <ButtonIcon
          clickHandler={() => navigate(`${club.id}`)}
          icon={<GiArrowhead />}
          label="club details"
        />
      </div>
    </li>
  );
};

export default ClubCard;
