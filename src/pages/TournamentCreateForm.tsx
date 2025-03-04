import React, { useState } from "react";
import { useSearchParams } from "react-router";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import FormInput from "../components/ui/FormInput";

const TournamentCreateForm = () => {
  const [params] = useSearchParams();
  const seasonId = params.get("seasonId");

  const [formData, setFormData] = useState({
    attendAt: "",
    title: "",
    description: "",
    location: "",
    organizedBy: "",
  });

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Create New Tournament</PageHeading>
      <Form handler={() => {}}>
        {/* <FormInput type="text" name="title" value={} handleChange={} /> */}
      </Form>
    </div>
  );
};

export default TournamentCreateForm;
