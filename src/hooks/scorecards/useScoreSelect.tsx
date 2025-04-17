import { useCallback, useEffect, useState } from "react";
import { Score3DType } from "../../types/scorecardType";
import { AnimalHit } from "../../types/scorecardType";

const useScore3DSelect = (rounds: number) => {
  const [scores3D, setScores3D] = useState<Score3DType[]>(
    Array.from({ length: rounds }, () => ({ hit: AnimalHit.center, arrow: 1 }))
  );

  useEffect(() => {
    setScores3D(
      Array.from({ length: rounds }, () => ({
        hit: AnimalHit.center,
        arrow: 1,
      }))
    );
  }, [rounds]);

  const updateHit = useCallback((index: number, hit: AnimalHit) => {
    setScores3D((oldState) =>
      oldState.map((score, i) => (i === index ? { ...score, hit } : score))
    );
  }, []);

  const updateArrow = useCallback((index: number, arrow: number) => {
    setScores3D((oldState) =>
      oldState.map((score, i) => (i === index ? { ...score, arrow } : score))
    );
  }, []);

  return { scores3D, updateHit, updateArrow };
};

export default useScore3DSelect;
