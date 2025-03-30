import { useMutation } from "@tanstack/react-query";
import { CreateSeasonParams, createSeason } from "../../lib/api";
import { useNavigate } from "react-router";

const useCreateSeason = () => {
  const navigate = useNavigate();
  const { mutate: createNewSeason, ...rest } = useMutation({
    mutationFn: (data: CreateSeasonParams) => createSeason(data),
    onSuccess: () => navigate("/dashboard/seasons", { replace: true }),
  });

  return { createNewSeason, ...rest };
};

export default useCreateSeason;
