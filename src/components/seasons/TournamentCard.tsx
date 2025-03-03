import { TournamentType } from "../../types/tournamentType";
import { formatDate, formatDistance } from "date-fns";

type Props = {
  tournament: TournamentType;
};

const TournamentCard = ({ tournament }: Props) => {
  const attendDate = new Date(tournament.attendAt);
  const now = new Date();
  const attendAt = formatDate(attendDate, "dd/MM/yyyy hh:mm");
  const attendDistance = formatDistance(attendDate, now, { addSuffix: true });
  const attendDatePast = attendDate.getTime() < now.getTime();

  return (
    <li className="border border-main-300 rounded-md px-6 py-4 text-main-300 font-inter">
      <h3 className="font-bold text-main-100 text-xl tracking-wider">
        {tournament.title}
      </h3>
      <p>{tournament.description}</p>
      <p className={`${attendDatePast ? "text-error" : "text-sec-green-500"}`}>
        {attendAt} {attendDistance}
      </p>
    </li>
  );
};

export default TournamentCard;
