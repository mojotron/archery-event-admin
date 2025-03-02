import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateSeasonFields, patchSeason } from "../lib/api";
import { QUERY_KEY_SEASON } from "./useSeason";
import { ResponseSeasonDetailsType } from "../types/seasonType";

const useSeasonMutate = (seasonId: string) => {
  const queryClient = useQueryClient();

  const { mutate: updateSeason, ...rest } = useMutation({
    mutationFn: (data: UpdateSeasonFields) => patchSeason(seasonId, data),
    onSuccess: (_, variables) => {
      queryClient.setQueryData(
        [QUERY_KEY_SEASON, seasonId],
        (cache: ResponseSeasonDetailsType) => {
          return { ...cache, season: { ...cache.season, ...variables } };
        }
      );
    },
  });

  return { updateSeason, ...rest };
};

export default useSeasonMutate;
