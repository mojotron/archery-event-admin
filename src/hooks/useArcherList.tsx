import { useQuery } from "@tanstack/react-query";
import { getArchers } from "../lib/api";

export const QUERY_KEY_ARCHER_LIST = "archers-list";

const useArcherList = () => {
  const { data: archers, ...rest } = useQuery({
    queryKey: [QUERY_KEY_ARCHER_LIST],
    queryFn: () => getArchers(),
  });

  return { archers, ...rest };
};

export default useArcherList;
