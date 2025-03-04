import { format, formatDistance } from "date-fns";
import HighlightRecord from "../ui/HighlightRecord";

type Params = {
  tournaments: number;
  tournamentCount: number;
  createdAt: string;
  updatedAt: string;
  seasonType: string;
};

const SeasonInfo = ({
  tournaments,
  tournamentCount,
  seasonType,
  createdAt,
  updatedAt,
}: Params) => {
  const created = format(new Date(createdAt), "dd/MM/yyyy");
  const updated = formatDistance(new Date(updatedAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div>
      <HighlightRecord
        regular="tournament progress"
        highlighted={`${tournaments}/${tournamentCount}`}
      />
      <HighlightRecord
        regular="tournament rules"
        highlighted={`${seasonType}`}
      />
      <HighlightRecord regular="created at" highlighted={`${created}`} />
      <HighlightRecord regular="last update" highlighted={`${updated}`} />
    </div>
  );
};

export default SeasonInfo;
