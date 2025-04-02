import { useQuery } from "@tanstack/react-query";
import { getSeason } from "../../lib/api";

export const QUERY_KEY_SEASON = "season";

const useSeason = (seasonId: string) => {
  const { data: season, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASON, seasonId],
    queryFn: () => getSeason(seasonId),
  });

  return { season, ...rest };
};

export default useSeason;
