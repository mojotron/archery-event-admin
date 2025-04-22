import { useQuery } from "@tanstack/react-query";
import { getArcher } from "../../lib/api";

export const QUERY_KEY_ARCHER = "archer";

const useArcher = (archerId: string) => {
  const { data: archer, ...rest } = useQuery({
    queryKey: [QUERY_KEY_ARCHER, archerId],
    queryFn: () => getArcher(archerId),
  });

  return { archer, ...rest };
};

export default useArcher;
