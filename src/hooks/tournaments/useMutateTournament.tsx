import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTournamentParams, updateTournament } from "../../lib/api";
import { TournamentType } from "../../types/tournamentType";
import { QUERY_KEY_TOURNAMENT } from "./useTournament";

const useMutateTournament = (tournamentId: string) => {
  const queryClient = useQueryClient();

  const { mutate: editTournament, ...rest } = useMutation({
    mutationFn: (data: UpdateTournamentParams) =>
      updateTournament(tournamentId, data),
    onSuccess: (data) => {
      queryClient.setQueryData<TournamentType>(
        [QUERY_KEY_TOURNAMENT, tournamentId],
        () => data
      );
    },
  });

  return { editTournament, ...rest };
};

export default useMutateTournament;
