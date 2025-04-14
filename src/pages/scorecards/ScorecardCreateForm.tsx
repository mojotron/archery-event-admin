import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import { RulesEnum } from "../../types/rulesType";

type FormState = {
  archerId: string;
  rounds: string;
  scores3D?: string[];
  scoresWA?: string[];
};

const ScorecardCreateForm = () => {
  const [searchParams] = useSearchParams();

  const rules = searchParams.get("rules") as RulesEnum;
  const tournamentId = searchParams.get("tournamentId");

  const [formData, setFormData] = useState<FormState>({
    archerId: "",
    rounds: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

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
            value={formData.rounds}
            onChange={handleChange}
          />

          {/* {rules === "scandinavian3D" && } */}

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
