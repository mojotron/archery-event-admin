import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../../lib/api";

const QUERY_KEY_USERS_LIST = "users-list";

const useUsersList = () => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY_USERS_LIST],
    queryFn: () => getUsersList(),
  });

  return { users: data?.users, ...rest };
};

export default useUsersList;
