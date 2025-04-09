import {
  dateDistanceTo,
  attendAtDateTime,
  daysDistance,
} from "../../utils/dateFormat";

type Props = {
  date: string;
};

const AttendAt = ({ date }: Props) => {
  const attendAt = attendAtDateTime(date);
  const attendDistance = dateDistanceTo(date);
  const days = daysDistance(date);

  return (
    <div className="space-x-1 text-lg font-inter">
      <span className="space-x-1 text-main-300">attend date: </span>
      <span className="font-bold text-main-100">{attendAt}</span>
      {days > 0 && (
        <span className="text-sec-green-500 font-bold">({attendDistance})</span>
      )}
    </div>
  );
};

export default AttendAt;
