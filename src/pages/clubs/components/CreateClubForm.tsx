import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Form from "../../../components/ui/Form";
import FormInput from "../../../components/ui/FormInput";
import Button from "../../../components/ui/Button";
import { createClub } from "../../../lib/api";
import SectionHeading from "../../../components/ui/SectionHeading";
import { QUERY_KEY_CLUB_LIST } from "../../../hooks/useClubs";
import { ClubType } from "../../../types/clubTypes";

const CreateClubForm = () => {
  const [formData, setFromData] = useState({
    name: "",
    address: "",
  });

  const queryClient = useQueryClient();

  const { mutate: addClub, isPending } = useMutation({
    mutationFn: () => createClub({ ...formData }),
    onSuccess: (data: ClubType) => {
      queryClient.setQueryData<ClubType[]>([QUERY_KEY_CLUB_LIST], (cache) => {
        return [...(cache || []), data];
      });
      setFromData({ name: "", address: "" });
    },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFromData((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <div>
      <SectionHeading>create new club</SectionHeading>
      <Form onSubmit={addClub}>
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
  );
};

export default CreateClubForm;
