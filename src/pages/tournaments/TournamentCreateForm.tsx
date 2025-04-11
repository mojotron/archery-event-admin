import { ChangeEvent, useState } from "react";
import { RulesEnum } from "../../types/rulesType";
import { useSearchParams } from "react-router";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import SelectRules from "../../components/ui/SelectRules";
import SelectClub from "../../components/ui/SelectClub";
import useCreateTournament from "../../hooks/tournaments/useCreateTournament";

type FormState = {
  rules: RulesEnum;
  title: string;
  attendAt: string;
  description: string;
  address: string;
  rounds: string;
  organizedById?: string;
};

const TournamentCreateForm = () => {
  const [searchParams] = useSearchParams();
  const seasonId = searchParams.get("seasonId");

  const [formData, setFormData] = useState<FormState>({
    title: "",
    description: "",
    address: "",
    attendAt: "",
    rules: RulesEnum.scandinavian3D,
    rounds: "",
    organizedById: "",
  });

  const { createNewTournament, isPending, isError } = useCreateTournament();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div className="px-4">
      <ButtonGoBack />
      <div className="flex flex-col items-center pt-2">
        <PageHeading>create new tournament</PageHeading>
        <Form
          onSubmit={() =>
            createNewTournament({
              ...formData,
              rounds: parseInt(formData.rounds),
              attendAt: new Date(formData.attendAt).toISOString(),
              ...(seasonId && { seasonId }),
            })
          }
        >
          {isError && <p>error</p>}

          <FormInput
            type="text"
            label="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <FormInput
            type="textarea"
            label="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            label="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <FormInput
            type="number"
            label="rounds"
            name="rounds"
            value={formData.rounds}
            onChange={handleChange}
          />

          <FormInput
            type="datetime-local"
            label="attend at"
            name="attendAt"
            value={formData.attendAt}
            onChange={handleChange}
          />

          <SelectRules
            currentRule={formData.rules}
            name="rules"
            onChange={handleChange}
          />

          <SelectClub
            currentClub={formData.organizedById || ""}
            name="organizedById"
            onChange={handleChange}
          />

          <Button
            type="submit"
            label="create tournament"
            isLoading={isPending}
            isDisabled={
              !formData.title ||
              !formData.description ||
              !formData.address ||
              !formData.rounds
            }
          />
        </Form>
      </div>
    </div>
  );
};

export default TournamentCreateForm;
