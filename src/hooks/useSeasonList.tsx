import { useQuery } from "@tanstack/react-query";
import { SeasonFilterType } from "../types/seasonType";
import { getSeasons } from "../lib/api";

const QUERY_KEY_SEASON_LIST = "season-list";

const useSeasonList = (filter: SeasonFilterType) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASON_LIST, filter],
    queryFn: () => getSeasons(filter),
  });

  return { seasons: data?.seasons, ...rest };
};

export default useSeasonList;
