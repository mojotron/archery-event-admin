import { useQuery } from "@tanstack/react-query";
import { getSingleSeason } from "../lib/api";

const QUERY_KEY_SEASON = "season";

const useSeason = (seasonId: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASON, seasonId],
    queryFn: () => getSingleSeason(seasonId),
  });

  return { season: data?.season, ...rest };
};

export default useSeason;
