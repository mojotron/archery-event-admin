import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/api";

const ADMIN_AUTH_QUERY_KEY = "ADMIN_AUTH";

const useAuth = () => {
  const { data: user, ...rest } = useQuery({
    queryKey: [ADMIN_AUTH_QUERY_KEY],
    queryFn: () => getUser(),
    staleTime: Infinity,
  });

  return { user, ...rest };
};

export default useAuth;
