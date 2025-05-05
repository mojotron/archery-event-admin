import { useQuery } from "@tanstack/react-query";
import { getSessions } from "../../lib/api";

export const QUERY_KEY_SESSIONS = "user-sessions";

const useSessions = () => {
  const { data: sessions, ...rest } = useQuery({
    queryKey: [QUERY_KEY_SESSIONS],
    queryFn: () => getSessions(),
  });

  return { sessions, ...rest };
};

export default useSessions;
