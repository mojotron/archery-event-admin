import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import FormInput from "../components/ui/FormInput";
import Button from "../components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import { postCreateTournament } from "../lib/api";

type LocationInputType = {
  addLocation: boolean;
  latitude: number;
  longitude: number;
};

const TournamentCreateForm = () => {
  const [params] = useSearchParams();
  const seasonId = params.get("seasonId") || "";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    organizedBy: "",
    description: "",
    attendAt: "",
    location: "",
  });

  const [locationData, setLocationData] = useState<LocationInputType>({
    addLocation: false,
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const { mutate } = useMutation({
    mutationFn: () =>
      postCreateTournament({
        ...formData,
        attendAt: new Date(formData.attendAt).toISOString(),
        seasonId,
      }),
    onSuccess: () =>
      navigate(`/dashboard/seasons/${seasonId}`, { replace: true }),
  });

  console.log(formData.attendAt);

  return (
    <div className="p-4 flex flex-col items-center">
      <PageHeading>Create New Tournament</PageHeading>
      <Form handler={mutate}>
        <FormInput
          label="title"
          type="text"
          name="title"
          value={formData.title}
          handleChange={handleChange}
        />

        <FormInput
          label="organized by"
          type="text"
          name="organizedBy"
          value={formData.organizedBy}
          handleChange={handleChange}
        />

        <FormInput
          label="description"
          type="textarea"
          name="description"
          value={formData.description}
          handleChange={handleChange}
        />

        <FormInput
          label="attend at"
          type="datetime-local"
          name="attendAt"
          value={formData.attendAt}
          handleChange={handleChange}
        />

        <FormInput
          label="location"
          type="text"
          name="location"
          value={formData.location}
          handleChange={handleChange}
        />

        <div className="w-full flex items-center justify-end gap-1 text-main-100">
          <label htmlFor="addCoords">add coordinates</label>
          <input
            className="appearance-none w-3 h-3 bg-main-500 rounded-sm border border-main-300 checked:bg-sec-blue-500 cursor-pointer"
            type="checkbox"
            name="coords"
            id="addCords"
            checked={locationData.addLocation}
            onChange={() =>
              setLocationData((oldState) => ({
                ...oldState,
                addLocation: !oldState.addLocation,
              }))
            }
          />
        </div>

        {locationData.addLocation === true && (
          <>
            <FormInput
              label="location latitude"
              type="number"
              name="latitude"
              value={locationData.latitude.toString()}
              handleChange={(e) =>
                setLocationData((oldState) => ({
                  ...oldState,
                  latitude: parseInt(e.target.value),
                }))
              }
            />

            <FormInput
              label="location longitude"
              type="number"
              name="longitude"
              value={locationData.longitude.toString()}
              handleChange={(e) =>
                setLocationData((oldState) => ({
                  ...oldState,
                  longitude: parseInt(e.target.value),
                }))
              }
            />
          </>
        )}

        <Button
          type="submit"
          label="create tournament"
          isLoading={false}
          isDisabled={false}
        />
      </Form>
    </div>
  );
};

export default TournamentCreateForm;
