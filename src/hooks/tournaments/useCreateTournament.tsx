import { useMutation } from "@tanstack/react-query";
import { CreateTournamentParams, createTournament } from "../../lib/api";
import { useNavigate } from "react-router";

const useCreateTournament = () => {
  const navigate = useNavigate();
  const { mutate: createNewTournament, ...rest } = useMutation({
    mutationFn: (data: CreateTournamentParams) => createTournament(data),
    onSuccess: (data) =>
      navigate(
        data.seasonId
          ? `/dashboard/seasons/${data.seasonId}`
          : `/dashboard/tournaments/${data.id}`,
        { replace: true }
      ),
  });
  return { createNewTournament, ...rest };
};

export default useCreateTournament;
