import { useCallback, useState } from "react";
import { ScoreWAType } from "../../types/scorecardType";

const useCreateScoreWA = (rounds: number) => {
  const [scoreWA, setScoreWA] = useState<ScoreWAType[]>(() =>
    Array.from({ length: rounds }, () => ({ first: 10, second: 10, third: 10 }))
  );

  const updateScore = useCallback(
    (arrow: "first" | "second" | "third", index: number, hit: number) => {
      setScoreWA((oldState) =>
        oldState.map((score, i) =>
          i === index ? { ...score, [arrow]: hit } : score
        )
      );
    },
    []
  );

  return { scoreWA, updateScore };
};

export default useCreateScoreWA;
