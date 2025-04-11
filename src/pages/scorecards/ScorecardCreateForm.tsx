import { useState } from "react";
import { useSearchParams } from "react-router";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";

type FormState = {
  archerId: string;
  scores3D?: string[];
  scoresWA?: string[];
};

const ScorecardCreateForm = () => {
  const [searchParams] = useSearchParams();

  const rules = searchParams.get("rules");
  const tournamentId = searchParams.get("tournamentId");

  const [formData] = useState<FormState>({ archerId: "" });

  return (
    <div className="px-4">
      <ButtonGoBack />
      <div className="flex flex-col items-center pt-2">
        <PageHeading>create new {rules} scorecard</PageHeading>
        <Form onSubmit={() => {}}>
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
