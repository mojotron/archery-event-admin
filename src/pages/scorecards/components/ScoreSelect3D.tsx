import { useState } from "react";
import { AnimalHit, Score3DType } from "../../../types/scorecardType";
import FormRadio from "../../../components/ui/FormRadio";

type Props = {
  rounds: number;
};

type ScoreState = Score3DType[];

const ScoreSelect3D = ({ rounds }: Props) => {
  const [scores, setScores] = useState<ScoreState>(() =>
    Array.from({ length: rounds }, () => ({ hit: AnimalHit.center, arrow: 1 }))
  );

  console.log(scores);

  return (
    <ul>
      {Array.from({ length: rounds }, (_, i) => (
        <li key={i} className="border-b py-2 border-b-main-500">
          <h3 className="text-lg text-main-300 font-bold">Target {i + 1}</h3>
          <div className="flex gap-8">
            <FormRadio
              name={`score-${i}`}
              handleChange={(e) =>
                setScores((oldValue) =>
                  oldValue.map((score, index) =>
                    index === i
                      ? { ...score, hit: e.target.value as AnimalHit }
                      : score
                  )
                )
              }
              selected={scores[i].hit}
              options={[
                {
                  label: AnimalHit.center,
                  value: AnimalHit.center,
                },
                {
                  label: AnimalHit.vital,
                  value: AnimalHit.vital,
                },
                {
                  label: AnimalHit.body,
                  value: AnimalHit.body,
                },
                {
                  label: AnimalHit.miss,
                  value: AnimalHit.miss,
                },
              ]}
            />

            <FormRadio
              name={`arrow-${i}`}
              handleChange={(e) =>
                setScores((oldValue) =>
                  oldValue.map((score, index) =>
                    index === i
                      ? { ...score, arrow: parseInt(e.target.value) }
                      : score
                  )
                )
              }
              selected={scores[i].arrow.toString()}
              options={[
                { label: "first arrow", value: "1" },
                { label: "second arrow", value: "2" },
                { label: "third arrow", value: "3" },
              ]}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ScoreSelect3D;
