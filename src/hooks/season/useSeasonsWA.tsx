import { useQuery } from "@tanstack/react-query";
import { SeasonStatusType } from "../../types/seasonType";
import { getSeasonsWA } from "../../lib/api";

const QUERY_KEY_SEASONS_WA = "season-list-wa";

type Params = {
  filter?: SeasonStatusType | undefined;
};

const useSeasonsWA = ({ filter }: Params) => {
  const { data: seasons, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASONS_WA, filter],
    queryFn: () => {
      return getSeasonsWA(filter);
    },
  });

  return { seasons, ...rest };
};

export default useSeasonsWA;
