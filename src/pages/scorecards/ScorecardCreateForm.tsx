import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import { RulesEnum } from "../../types/rulesType";
import ScoreSelect3D from "./components/ScoreSelect3D";
import SelectArcher from "../../components/ui/SelectArcher";
import useScore3DSelect from "../../hooks/scorecards/useScore3DSelect";
import useCreateScorecard from "../../hooks/scorecards/useCreateScorecard";

const ScorecardCreateForm = () => {
  const [searchParams] = useSearchParams();

  const rules = searchParams.get("rules") as RulesEnum;
  const tournamentId = searchParams.get("tournamentId") as string;

  const [archerId, setArcherId] = useState("");
  const [rounds, setRounds] = useState(0);

  const { scores3D, updateHit, updateArrow } = useScore3DSelect(rounds);

  const { createNewScorecard, isSuccess } = useCreateScorecard();

  const submitHandler = () => {
    if (rules === RulesEnum.scandinavian3D) {
      createNewScorecard({
        rules,
        archerId,
        tournamentId,
        score3DList: scores3D,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setArcherId("");
      setRounds(0);
    }
  }, [isSuccess]);

  return (
    <div className="px-4">
      <ButtonGoBack />
      <div className="flex flex-col items-center pt-2">
        <PageHeading>create new {rules} scorecard</PageHeading>
        <Form onSubmit={submitHandler}>
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

          {rules === RulesEnum.scandinavian3D && (
            <ScoreSelect3D
              scores={scores3D}
              updateHit={updateHit}
              updateArrow={updateArrow}
            />
          )}

          {rules === RulesEnum.worldArchery3D && <p>world archery 3d</p>}

          {rules === RulesEnum.worldArchery && <p>world archery</p>}

          <Button
            type="submit"
            label="create scorecard"
            isLoading={false}
            isDisabled={!archerId || !archerId}
          />
        </Form>
      </div>
    </div>
  );
};

export default ScorecardCreateForm;
