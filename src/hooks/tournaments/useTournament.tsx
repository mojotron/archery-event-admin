import { useQuery } from "@tanstack/react-query";
import { getTournament } from "../../lib/api";

export const QUERY_KEY_TOURNAMENT = "tournament";

const useTournament = (tournamentId: string) => {
  const { data: tournament, ...rest } = useQuery({
    queryKey: [QUERY_KEY_TOURNAMENT, tournamentId],
    queryFn: () => getTournament(tournamentId),
  });
  return { tournament, ...rest };
};

export default useTournament;
