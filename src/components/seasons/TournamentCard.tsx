import { useNavigate } from "react-router";
import ButtonIcon from "../ui/ButtonIcon";
// icons
import {
  MdGridView as IconView,
  MdEditDocument as IconEdit,
} from "react-icons/md";
// types
import type { TournamentType } from "../../types/tournamentType";
import TournamentAttendAt from "../tournaments/TournamentAttendAt";

type Props = {
  tournament: TournamentType;
};

const TournamentCard = ({ tournament }: Props) => {
  const navigate = useNavigate();

  return (
    <li className="border border-main-300 rounded-md px-6 py-4 text-main-300 font-inter flex items-start justify-between gap-4">
      <div className="space-y-2">
        <header>
          <h3 className="font-bold text-main-100 text-xl tracking-wider">
            {tournament.title}
          </h3>
          <p>{tournament.description}</p>
        </header>

        <TournamentAttendAt date={tournament.attendAt} />

        <div>
          <h4 className="font-bold text-lg">location</h4>
          <p>{tournament.location}</p>
        </div>

        <div>
          <h4 className="font-bold text-lg">organized by</h4>
          <p>{tournament.organizedBy}</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="space-x-1 font-bold text-lg text-main-100">
          <span>Tournament progress:</span>
          {tournament.isFinished ? (
            <span className="text-sec-blue-500">finished</span>
          ) : (
            <span className="text-sec-green-500">pending</span>
          )}
        </h3>

        <ButtonIcon
          label={
            tournament.isFinished ? "view tournament" : "manage tournament"
          }
          clickHandler={() =>
            navigate(
              `/dashboard/tournaments/${tournament.id}/${
                tournament.isFinished ? "view" : "edit"
              }`
            )
          }
          icon={
            tournament.isFinished ? (
              <IconView className="text-sec-blue-500" />
            ) : (
              <IconEdit className="text-sec-green-500" />
            )
          }
        />
      </div>
    </li>
  );
};

export default TournamentCard;
