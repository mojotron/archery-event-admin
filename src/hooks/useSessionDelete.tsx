import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSession } from "../lib/api";
import { QUERY_KEY_SESSIONS } from "./useSessions";
import { SessionType } from "../types/sessionTypes";

const useSessionDelete = (sessionId: string) => {
  const queryClient = useQueryClient();

  const { mutate: sessionDelete, ...rest } = useMutation({
    mutationFn: () => deleteSession(sessionId),
    onSuccess: () => {
      queryClient.setQueryData<SessionType[]>([QUERY_KEY_SESSIONS], (cache) =>
        cache?.filter((session) => session.id !== sessionId)
      );
    },
  });

  return { sessionDelete, ...rest };
};

export default useSessionDelete;
