// hooks
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
// api
import { createArcher } from "../../lib/api";
// components
import SectionHeading from "../../components/ui/SectionHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import LoadingError from "../../components/general/LoadingError";
import FormInput from "../../components/ui/FormInput";

import ButtonGoBack from "../../components/ui/ButtonGoBack";
import SelectClub from "./components/SelectClub";

const CreateArcherForm = () => {
  const navigate = useNavigate();

  const [formData, setFormDate] = useState({
    clubId: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormDate((oldState) => ({ ...oldState, [name]: value }));
  };

  const {
    mutate: addArcher,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => createArcher({ ...formData }),
    onSuccess: () => navigate("/dashboard/archers"),
  });

  return (
    <div className="px-4">
      <ButtonGoBack path="/dashboard/archers" />
      <div className="flex flex-col items-center pt-2">
        <SectionHeading>create new archer</SectionHeading>
        <Form onSubmit={addArcher}>
          {isError && <LoadingError message="failed to create archer" />}

          <SelectClub currentClub={""} name="clubId" onChange={handleChange} />

          <FormInput
            type="text"
            name="firstName"
            label="first name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="lastName"
            label="last name"
            value={formData.lastName}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="username"
            label="username"
            value={formData.username}
            onChange={handleChange}
          />

          <FormInput
            type="email"
            name="email"
            label="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Button
            type="submit"
            label="add archer"
            isLoading={isPending}
            isDisabled={
              !formData.firstName || !formData.lastName || !formData.username
            }
          />
        </Form>
      </div>
    </div>
  );
};

export default CreateArcherForm;
