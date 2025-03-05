import { formatDate, formatDistance } from "date-fns";

type Props = {
  date: string;
};

const TournamentAttendAt = ({ date }: Props) => {
  const attendDate = new Date(date);
  const now = new Date();
  const attendAt = formatDate(attendDate, "dd/MM/yyyy hh:mm");
  const attendDistance = formatDistance(attendDate, now, { addSuffix: true });
  const attendDatePast = attendDate.getTime() < now.getTime();

  return (
    <div className="flex items-center gap-1 font-inter">
      <h4 className="text-lg text-main-300">date and time</h4>
      <p className="space-x-1 text-main-100 font-bold text-lg">
        <span>{attendAt}</span>
        <span
          className={`${attendDatePast ? "text-error" : "text-sec-green-500"}`}
        >
          {attendDistance}
        </span>
      </p>
    </div>
  );
};

export default TournamentAttendAt;
