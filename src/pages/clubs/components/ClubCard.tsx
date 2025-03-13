import IconDelete from "../../../components/ui/IconDelete";

import { ClubType } from "../../../types/clubTypes";
import { useNavigate } from "react-router";
import IconEdit from "../../../components/ui/IconEdit";

type Props = {
  club: ClubType;
};

const ClubCard = ({ club }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="bg-main-500 px-6 py-4 rounded-md flex gap-8 justify-between">
      <div>
        <h3 className="text-main-100 font-bold text-xl">{club.name}</h3>
        <p className="text-lg text-main-300">{club.address}</p>
      </div>
      <div className="flex flex-col gap-2 items-baseline">
        <IconEdit onEdit={() => navigate(`${club.id}/edit`)} />
        <IconDelete onDelete={() => navigate(`${club.id}/delete`)} />
      </div>
    </li>
  );
};

export default ClubCard;
