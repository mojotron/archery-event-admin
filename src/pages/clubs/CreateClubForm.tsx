// hooks
import { ChangeEvent, useState } from "react";
// components
import Form from "../../components/ui/Form";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import LoadingError from "../../components/general/LoadingError";
import useCreateClub from "../../hooks/clubs/useCreateClub";
import ButtonGoBack from "../../components/ui/ButtonGoBack";

type FormState = {
  name: string;
  address: string;
};

const CreateClubForm = () => {
  const [formData, setFromData] = useState<FormState>({
    name: "",
    address: "",
  });

  const { createNewClub, isPending, isError } = useCreateClub();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFromData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div className="px-4">
      <ButtonGoBack />
      <div className="flex flex-col items-center pt-2">
        <SectionHeading>create new club</SectionHeading>
        <Form onSubmit={() => createNewClub({ ...formData })}>
          {isError && <LoadingError message="failed to create club" />}

          <FormInput
            type="text"
            name="name"
            label="name"
            value={formData.name}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address"
            label="address"
            value={formData.address}
            onChange={handleChange}
          />

          <Button
            type="submit"
            label="add club"
            isDisabled={!formData.name || !formData.address}
            isLoading={isPending}
          />
        </Form>
      </div>
    </div>
  );
};

export default CreateClubForm;
