import { ChangeEvent, useState } from "react";
import PageHeading from "../../components/ui/PageHeading";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import { useMutation } from "@tanstack/react-query";
import LoadingError from "../../components/general/LoadingError";
import { useNavigate } from "react-router";
import { createSeasonScan3D } from "../../lib/api";

const CreateSeasonScan3D = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tournamentCount: "",
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () =>
      createSeasonScan3D({
        ...formData,
        tournamentCount: parseInt(formData.tournamentCount),
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
        <PageHeading>Create new Scandinavian 3D rules season</PageHeading>
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

export default CreateSeasonScan3D;
