import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTournamentParams, patchTournament } from "../lib/api";
import { QUERY_KEY_TOURNAMENT } from "./useTournament";
import { ResponseTournamentType } from "../types/tournamentType";

const useTournamentUpdate = (tournamentId: string) => {
  const queryClient = useQueryClient();

  const { mutate: updateTournament, ...rest } = useMutation({
    mutationFn: (data: UpdateTournamentParams) =>
      patchTournament(tournamentId, data),
    onSuccess: (_, variables) => {
      queryClient.setQueryData(
        [QUERY_KEY_TOURNAMENT, tournamentId],
        (cache: ResponseTournamentType) => {
          return {
            ...cache,
            tournament: { ...cache.tournament, ...variables },
          };
        }
      );
    },
  });

  return { updateTournament, ...rest };
};

export default useTournamentUpdate;
