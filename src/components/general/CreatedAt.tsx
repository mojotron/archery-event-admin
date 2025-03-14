import { formatDate } from "date-fns";
import HighlightRecord from "../ui/HighlightRecord";

type Props = {
  date: string;
};

const CreatedAt = ({ date }: Props) => {
  const cratedAt = formatDate(new Date(date), "dd/MM/yyy");
  return <HighlightRecord regular="created at" highlighted={cratedAt} />;
};

export default CreatedAt;
