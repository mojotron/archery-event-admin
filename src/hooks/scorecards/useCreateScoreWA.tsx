import { useState } from "react";
import { ScoreWAType } from "../../types/scorecardType";

const useCreateScoreWA = (rounds: number) => {
  const [scoreWA, setScoreWA] = useState<ScoreWAType[]>(() =>
    Array.from({ length: rounds }, () => ({ first: 10, second: 10, third: 10 }))
  );
  return { scoreWA };
};

export default useCreateScoreWA;
