import { format, formatDistance } from "date-fns";
import SeasonInfoRecord from "./SeasonInfoRecord";

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
      <SeasonInfoRecord
        regular="tournament progress"
        highlighted={`${tournaments}/${tournamentCount}`}
      />
      <SeasonInfoRecord
        regular="tournament rules"
        highlighted={`${seasonType}`}
      />
      <SeasonInfoRecord regular="created at" highlighted={`${created}`} />
      <SeasonInfoRecord regular="last update" highlighted={`${updated}`} />
    </div>
  );
};

export default SeasonInfo;
