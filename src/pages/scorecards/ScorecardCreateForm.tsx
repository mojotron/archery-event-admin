import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import { RulesEnum } from "../../types/rulesType";
import ScoreSelect3D from "./components/ScoreSelect3D";
import { SCORE_3D_ROUNDS } from "../../constants/score";
import { Score3DType } from "../../types/scorecardType";
import SelectArcher from "../../components/ui/SelectArcher";

type FormState = {
  archerId: string;
  rounds: number;
  scores3D?: string[];
  scoresWA?: string[];
};

type Scores3DState = Score3DType[] | null;

const ScorecardCreateForm = () => {
  const [searchParams] = useSearchParams();

  const rules = searchParams.get("rules") as RulesEnum;
  const tournamentId = searchParams.get("tournamentId");

  const [archerId, setArcherId] = useState("");
  const [rounds, setRounds] = useState(0);

  return (
    <div className="px-4">
      <ButtonGoBack />
      <div className="flex flex-col items-center pt-2">
        <PageHeading>create new {rules} scorecard</PageHeading>
        <Form onSubmit={() => {}}>
          <FormInput
            type="number"
            label="number of rounds"
            name="rounds"
            value={rounds.toString()}
            onChange={(e) => setRounds(parseInt(e.target.value))}
          />

          <SelectArcher
            selectedArcherId={archerId}
            onChange={(e) => setArcherId(e.target.value)}
          />

          {rules === "scandinavian3D" && <ScoreSelect3D rounds={rounds} />}

          <Button
            type="submit"
            label="create scorecard"
            isLoading={false}
            isDisabled={!formData.archerId || !formData.archerId}
          />
        </Form>
      </div>
    </div>
  );
};

export default ScorecardCreateForm;
