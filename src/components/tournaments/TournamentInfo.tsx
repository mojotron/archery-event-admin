import { formatDate, formatDistance } from "date-fns";
import { TournamentType } from "../../types/tournamentType";
import HighlightRecord from "../ui/HighlightRecord";
import TournamentAttendAt from "./TournamentAttendAt";

type Props = {
  tournament: TournamentType;
};

const TournamentInfo = ({ tournament }: Props) => {
  const createdAt = formatDate(new Date(tournament.createdAt), "dd/MM/yyyy");
  const updatedAt = formatDistance(new Date(tournament.updatedAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div>
      <HighlightRecord regular="created at" highlighted={createdAt} />
      <HighlightRecord regular="updated at" highlighted={updatedAt} />
      <HighlightRecord
        regular="organized by"
        highlighted={tournament.organizedBy}
      />
      <TournamentAttendAt date={tournament.attendAt} />
      <HighlightRecord regular="location" highlighted={tournament.location} />
    </div>
  );
};

export default TournamentInfo;
