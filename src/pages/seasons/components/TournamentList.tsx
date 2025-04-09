import { TournamentInfoType } from "../../../types/tournamentType";
import AttendAt from "../../../components/general/AttendAt";
import ButtonIcon from "../../../components/ui/ButtonIcon";
import { useNavigate } from "react-router";
import { GiArrowFlights } from "react-icons/gi";

type Props = {
  tournaments: TournamentInfoType[];
};

const TournamentList = ({ tournaments }: Props) => {
  const navigate = useNavigate();

  return (
    <ul className="space-y-4">
      {tournaments.map((tournament) => (
        <li
          className="p-4 border border-main-500 rounded space-y-2"
          key={tournament.id}
        >
          <div>
            <h2 className="text-main-100 text-xl font-bold font-inter">
              {tournament.title}
            </h2>
            <AttendAt date={tournament.attendAt} />
          </div>

          <ButtonIcon
            icon={<GiArrowFlights />}
            label="details"
            clickHandler={() =>
              navigate(`/dashboard/tournaments/${tournament.id}`)
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default TournamentList;
