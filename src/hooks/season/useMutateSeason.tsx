import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateSeasonParams, updateSeason } from "../../lib/api";
import { QUERY_KEY_SEASON } from "./useSeason";
import { SeasonTypeWithTournamentInfo } from "../../types/seasonType";

const useMutateSeason = (seasonId: string) => {
  const queryClient = useQueryClient();

  const { mutate: editSeason, ...rest } = useMutation({
    mutationFn: (data: UpdateSeasonParams) => updateSeason(seasonId, data),
    onSuccess: (data) => {
      queryClient.setQueryData<SeasonTypeWithTournamentInfo>(
        [QUERY_KEY_SEASON, seasonId],
        () => data
      );
    },
  });

  return { editSeason, ...rest };
};

export default useMutateSeason;
