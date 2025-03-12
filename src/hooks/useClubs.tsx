import { useQuery } from "@tanstack/react-query";
import { getClubs } from "../lib/api";

export const QUERY_KEY_CLUB_LIST = "clubs-list";

const useClubs = () => {
  const { data: clubs, ...rest } = useQuery({
    queryKey: [QUERY_KEY_CLUB_LIST],
    queryFn: () => getClubs(),
  });

  return { clubs, ...rest };
};

export default useClubs;
