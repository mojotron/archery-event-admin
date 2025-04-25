import LoadingError from "../../../components/general/LoadingError";
import TournamentList from "../../../components/general/TournamentList";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import useTournamentList from "../../../hooks/tournaments/useTournamentList";
import { TournamentFilterType } from "../Tournaments";

type Props = {
  filters: TournamentFilterType;
};

const TournamentSearchResults = ({ filters }: Props) => {
  const { tournaments, isLoading, isError, error } = useTournamentList({
    ...filters,
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message={error.message} />}
      {tournaments && <TournamentList tournaments={tournaments} />}
    </>
  );
};

export default TournamentSearchResults;
