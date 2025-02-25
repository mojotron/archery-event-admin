import { ChangeEvent, useState } from "react";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import FormInput from "../components/ui/FormInput";
import Button from "../components/ui/Button";
import FormSelect from "../components/ui/FormSelect";

import { TOURNAMENT_TYPE } from "../constants/apiConstants";
import { useMutation } from "@tanstack/react-query";
import { postCreateSeason } from "../lib/api";
import { useNavigate } from "react-router";

const SeasonCreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tournamentCount: "",
    type: TOURNAMENT_TYPE[0],
  });

  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () =>
      postCreateSeason({
        ...formData,
        tournamentCount: parseInt(formData.tournamentCount),
      }),
    onSuccess: () => navigate("/dashboard/seasons", { replace: true }),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>create new season</PageHeading>

      <Form handler={mutate}>
        {isError && <p className="text-error">{error.message}</p>}

        <FormInput
          type="text"
          label="title"
          name="title"
          value={formData.title}
          handleChange={handleChange}
        />

        <FormInput
          type="textarea"
          label="description"
          name="description"
          value={formData.description}
          handleChange={handleChange}
        />

        <FormInput
          type="number"
          label="number of tournaments"
          name="tournamentCount"
          value={formData.tournamentCount}
          handleChange={handleChange}
        />

        <FormSelect
          defaultValue={formData.type}
          handleChange={handleChange}
          label="tournament rule type"
          name="type"
          options={TOURNAMENT_TYPE}
        />

        <Button label="create season" type="submit" isLoading={isPending} />
      </Form>
    </div>
  );
};

export default SeasonCreateForm;
