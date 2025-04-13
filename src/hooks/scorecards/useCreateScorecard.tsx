import { useMutation } from "@tanstack/react-query";
import { CreateScorecardParams, createScorecard } from "../../lib/api";

const useCreateScorecard = () => {
  const { mutate: createNewScorecard, ...rest } = useMutation({
    mutationFn: (data: CreateScorecardParams) => createScorecard(data),
  });
  return { createNewScorecard, ...rest };
};

export default useCreateScorecard;
