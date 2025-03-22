import { ChangeEvent, useState } from "react";
import PageHeading from "../../components/ui/PageHeading";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import { useMutation } from "@tanstack/react-query";
import LoadingError from "../../components/general/LoadingError";
import { useNavigate } from "react-router";
import { createSeasonWA } from "../../lib/api";

const CreateSeasonWA = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tournamentCount: "",
    distance: "",
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () =>
      createSeasonWA({
        ...formData,
        tournamentCount: parseInt(formData.tournamentCount),
        distance: parseInt(formData.distance),
      }),
    onSuccess: () => navigate(`/dashboard/seasons`),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div className="px-4">
      <ButtonGoBack path="/dashboard/seasons" />
      <div className="flex flex-col items-center pt-2">
        <PageHeading>Create new world archery target rules season</PageHeading>
        <Form onSubmit={mutate}>
          {isError && <LoadingError message="failed to create new season" />}

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
            label="number of tournaments"
            name="tournamentCount"
            value={formData.tournamentCount}
            onChange={handleChange}
          />

          <FormInput
            type="number"
            label="target distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
          />
          <Button
            type="submit"
            label="create season"
            isLoading={isPending}
            isDisabled={
              !formData.title ||
              !formData.description ||
              !formData.tournamentCount ||
              !formData.description
            }
          />
        </Form>
      </div>
    </div>
  );
};

export default CreateSeasonWA;
