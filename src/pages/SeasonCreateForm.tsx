import { ChangeEvent, useState } from "react";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import FormInput from "../components/ui/FormInput";
import Button from "../components/ui/Button";
import FormSelect from "../components/ui/FormSelect";

const tournamentType = ["scandinavian_3D", "duel"];

const SeasonCreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tournamentCount: "",
    type: tournamentType[0],
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

      <Form handler={() => console.log(formData)}>
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
          options={tournamentType}
        />

        <Button label="create season" type="submit" />
      </Form>
    </div>
  );
};

export default SeasonCreateForm;
