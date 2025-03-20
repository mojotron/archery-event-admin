import { useQuery } from "@tanstack/react-query";
import { SeasonStatusType } from "../../types/seasonType";
import { getSeasonsScan3D } from "../../lib/api";
import { RulesEnum } from "../../types/ruleType";

const QUERY_KEY_SEASON_LIST = "season-list-scan3D";

type Params = {
  type: RulesEnum;
  filter?: SeasonStatusType;
};

const useSeasonList = ({ type, filter }: Params) => {
  const { data: seasons, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASON_LIST, filter],
    queryFn: () => {
      if (type === RulesEnum.scandinavian3D) {
        return getSeasonsScan3D(filter);
      }
    },
  });

  return { seasons, ...rest };
};

export default useSeasonList;
