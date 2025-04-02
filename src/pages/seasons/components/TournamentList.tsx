import { TournamentInfoType } from "../../../types/tournamentType";
import SectionHeading from "../../../components/ui/SectionHeading";
import AttendAt from "../../../components/general/AttendAt";

type Props = {
  tournaments: TournamentInfoType[];
};

const TournamentList = ({ tournaments }: Props) => {
  return (
    <div>
      <SectionHeading>tournaments</SectionHeading>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            <h2>{tournament.title}</h2>
            <AttendAt date={tournament.attendAt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;
