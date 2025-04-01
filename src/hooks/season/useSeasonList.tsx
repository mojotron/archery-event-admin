import { useQuery } from "@tanstack/react-query";
import { RulesEnum } from "../../types/rulesType";
import { StatusEnum } from "../../types/statusType";
import { getSeasonList } from "../../lib/api";

export const QUERY_KEY_SEASON_LIST = "season-list";

type SeasonFilters = {
  rules?: RulesEnum;
  status?: StatusEnum;
};

const useSeasonList = ({ rules, status }: SeasonFilters) => {
  const { data: seasons, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASON_LIST],
    queryFn: () => getSeasonList({ rules, status }),
  });

  return { seasons, ...rest };
};

export default useSeasonList;
