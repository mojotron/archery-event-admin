import { dateDistanceTo } from "../../utils/dateFormat";

type Props = {
  date: string;
};

const AttendAt = ({ date }: Props) => {
  const attendAt = dateDistanceTo(date);
  return <div>AttendAt: {attendAt}</div>;
};

export default AttendAt;
