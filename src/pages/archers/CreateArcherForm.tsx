// hooks
import { ChangeEvent, useState } from "react";
// components
import SectionHeading from "../../components/ui/SectionHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import LoadingError from "../../components/general/LoadingError";
import FormInput from "../../components/ui/FormInput";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import SelectClub from "../../components/ui/SelectClub";
import useCreateArcher from "../../hooks/archers/useCreateArcher";

type FormState = {
  clubId: string;
  firstName: string;
  lastName: string;
  email: string | undefined;
  username: string;
};

const CreateArcherForm = () => {
  const [formData, setFormDate] = useState<FormState>({
    clubId: "",
    firstName: "",
    lastName: "",
    email: undefined,
    username: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormDate((oldState) => ({ ...oldState, [name]: value }));
  };

  const { createNewArcher, isPending, isError } = useCreateArcher();

  return (
    <div className="px-4">
      <ButtonGoBack path="/dashboard/archers" />
      <div className="flex flex-col items-center pt-2">
        <SectionHeading>create new archer</SectionHeading>
        <Form onSubmit={() => createNewArcher(formData)}>
          {isError && <LoadingError message="failed to create archer" />}

          <SelectClub
            selectedClubId={formData.clubId}
            onChange={handleChange}
          />

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
            value={formData.email || ""}
            onChange={handleChange}
            required={false}
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
