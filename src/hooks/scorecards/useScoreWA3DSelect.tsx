import { useCallback, useState } from "react";
import { AnimalHitWA, ScoreWA3DType } from "../../types/scorecardType";

const useScoreWA3DSelect = (rounds: number) => {
  const [scoresWA3D, setScoresWA3D] = useState<ScoreWA3DType[]>(
    Array.from({ length: rounds }, () => ({
      first: AnimalHitWA.center,
      second: AnimalHitWA.center,
    }))
  );

  const updateHit = useCallback(
    (arrow: "first" | "second", index: number, hit: AnimalHitWA) => {
      setScoresWA3D((oldState) =>
        oldState.map((score, i) =>
          i === index ? { ...score, [arrow]: hit } : score
        )
      );
    },
    []
  );

  return { scoresWA3D, updateHit };
};

export default useScoreWA3DSelect;
