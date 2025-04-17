import { AnimalHit, Score3DType } from "../../../types/scorecardType";
import FormRadio from "../../../components/ui/FormRadio";

type Props = {
  scores: Score3DType[];
  updateHit: (index: number, hit: AnimalHit) => void;
  updateArrow: (index: number, hit: number) => void;
};

const ScoreSelect3D = ({ scores, updateHit, updateArrow }: Props) => {
  return (
    <ul>
      {scores.map((score, i) => (
        <li key={i} className="border-b py-2 border-b-main-500">
          <h3 className="text-lg text-main-300 font-bold">Target {i + 1}</h3>
          <div className="flex gap-8">
            <FormRadio
              name={`score-${i}`}
              handleChange={(e) => updateHit(i, e.target.value as AnimalHit)}
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
              handleChange={(e) => updateArrow(i, parseInt(e.target.value))}
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
