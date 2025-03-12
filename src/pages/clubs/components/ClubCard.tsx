import { ClubType } from "../../../types/clubTypes";

type Props = {
  club: ClubType;
};

const ClubCard = ({ club }: Props) => {
  return (
    <li className="bg-main-500 px-6 py-2 rounded-md">
      <h3 className="text-main-100 font-bold text-xl">{club.name}</h3>
      <p className="text-lg text-main-300">{club.address}</p>
    </li>
  );
};

export default ClubCard;
