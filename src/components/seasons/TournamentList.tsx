import { TournamentType } from "../../types/tournamentType";
import TournamentCard from "./TournamentCard";

type Props = {
  tournaments: TournamentType[];
};

const TournamentList = ({ tournaments }: Props) => {
  return (
    <ul className="py-4 space-y-1">
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </ul>
  );
};

export default TournamentList;
