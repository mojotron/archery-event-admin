import { useQuery } from "@tanstack/react-query";
import { SeasonStatusType } from "../../types/seasonType";
import { getSeasonsScan3D } from "../../lib/api";

const QUERY_KEY_SEASONS_SCAN3D = "season-list-scan3D";

type Params = {
  filter?: SeasonStatusType;
};

const useSeasonsScan3D = ({ filter = undefined }: Params) => {
  const { data: seasons, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASONS_SCAN3D, filter],
    queryFn: () => {
      return getSeasonsScan3D(filter);
    },
  });

  return { seasons, ...rest };
};

export default useSeasonsScan3D;
