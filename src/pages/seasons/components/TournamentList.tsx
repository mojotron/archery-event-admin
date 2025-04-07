import { TournamentInfoType } from "../../../types/tournamentType";
import AttendAt from "../../../components/general/AttendAt";

type Props = {
  tournaments: TournamentInfoType[];
};

const TournamentList = ({ tournaments }: Props) => {
  return (
    <ul className="space-y-4">
      {tournaments.map((tournament) => (
        <li key={tournament.id}>
          <h2>{tournament.title}</h2>
          <AttendAt date={tournament.attendAt} />
        </li>
      ))}
    </ul>
  );
};

export default TournamentList;
