import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateArcherParams, editArcher } from "../lib/api";
import { ArcherType } from "../types/archerTypes";
import { QUERY_KEY_ARCHER } from "./useArcher";

const useArcherMutate = (archerId: string) => {
  const queryClient = useQueryClient();

  const { mutate: updateArcher, ...rest } = useMutation({
    mutationFn: (data: UpdateArcherParams) => editArcher(archerId, data),
    onSuccess: (data) => {
      queryClient.setQueryData<ArcherType>(
        [QUERY_KEY_ARCHER, archerId],
        () => data
      );
    },
  });

  return { updateArcher, ...rest };
};

export default useArcherMutate;
