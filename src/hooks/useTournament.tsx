import { useQuery } from "@tanstack/react-query";
import { getSingleTournament } from "../lib/api";

const QUERY_KEY_TOURNAMENT = "tournament";

const useTournament = (tournamentId: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY_TOURNAMENT, tournamentId],
    queryFn: () => getSingleTournament(tournamentId),
  });

  return { tournament: data?.tournament, ...rest };
};

export default useTournament;
