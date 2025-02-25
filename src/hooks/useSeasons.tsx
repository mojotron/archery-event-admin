import { useQuery } from "@tanstack/react-query";

const QUERY_KEY_SEASON = "seasons";

const useSeasons = (active: boolean) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SEASON, active],
    queryFn: () => Promise.resolve(true),
  });

  return { data, ...rest };
};

export default useSeasons;
