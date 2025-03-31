import { ChangeEvent, useState } from "react";
import { RulesEnum } from "../../types/rulesType";
import useCreateSeason from "../../hooks/season/useCreateSeason";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import SelectRules from "../../components/ui/SelectRules";

type FormState = {
  title: string;
  description: string;
  tournamentCount: string; // turn to number on submit [*]
  rules: RulesEnum;
};

const SeasonCreateForm = () => {
  const [formData, setFormData] = useState<FormState>({
    title: "",
    description: "",
    tournamentCount: "",
    rules: RulesEnum.scandinavian3D,
  });

  const { createNewSeason, isPending, isError } = useCreateSeason();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div className="px-4">
      <ButtonGoBack path="/dashboard/seasons" />
      <div className="flex flex-col items-center pt-2">
        <PageHeading>create new season</PageHeading>
        <Form
          onSubmit={() =>
            createNewSeason({
              ...formData,
              tournamentCount: parseInt(formData.tournamentCount), // [*]
            })
          }
        >
          {isError && <p>error</p>}

          <SelectRules
            currentRule={formData.rules}
            name="rules"
            onChange={handleChange}
          />
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
            type="number"
            label="number of tournament"
            name="tournamentCount"
            value={formData.tournamentCount.toString()}
            onChange={handleChange}
          />
          <Button
            type="submit"
            label="create season"
            isLoading={isPending}
            isDisabled={
              !formData.title ||
              !formData.description ||
              !formData.tournamentCount
            }
          />
        </Form>
      </div>
    </div>
  );
};

export default SeasonCreateForm;
