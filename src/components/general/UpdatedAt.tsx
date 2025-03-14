import { formatDistance } from "date-fns";
import HighlightRecord from "../ui/HighlightRecord";

type Props = {
  date: string;
};

const UpdatedAt = ({ date }: Props) => {
  const cratedAt = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
  return <HighlightRecord regular="last update" highlighted={cratedAt} />;
};

export default UpdatedAt;
