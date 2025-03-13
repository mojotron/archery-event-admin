import { useQuery } from "@tanstack/react-query";
import { getClub } from "../lib/api";

export const QUERY_KEY_CLUB = "club";

const useClub = (clubId: string) => {
  const { data: club, ...rest } = useQuery({
    queryKey: [QUERY_KEY_CLUB, clubId],
    queryFn: () => getClub(clubId),
  });

  return { club, ...rest };
};

export default useClub;
