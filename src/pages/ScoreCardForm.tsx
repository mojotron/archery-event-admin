import { ChangeEvent, useState } from "react";
import { useParams } from "react-router";
import useTournament from "../hooks/useTournament";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ButtonGoBack from "../components/ui/ButtonGoBack";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import useUsersList from "../hooks/useUsersList";
import FormSelect from "../components/ui/FormSelect";

const ScoreCardForm = () => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament, isLoading, isError } = useTournament(tournamentId);
  const { users } = useUsersList();

  const [formData, setFormData] = useState({ userId: "" });

  const handlePickUser = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);

    setFormData((oldState) => ({ ...oldState, userId: e.target.value }));
  };

  const userOptions = users
    ? [
        { label: "--- pick user ---", value: "" },
        ...users.map((user) => ({
          label: `${user.firstName} ${user.lastName}`,
          value: user.id,
        })),
      ]
    : [];

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch tournament data</p>}
      {tournament && users && (
        <>
          <header>
            <ButtonGoBack path={`/dashboard/tournaments/${tournamentId}`} />
            <PageHeading>add score card</PageHeading>
          </header>
          <Form handler={() => console.log(formData)}>
            <FormSelect
              label="select archer"
              name="temp"
              options={userOptions}
              handleChange={handlePickUser}
              defaultValue={formData.userId}
            />

            <div>
              <h3>Target number 1</h3>
              <div className="flex">
                <FormSelect
                  label="arrow"
                  name="temp"
                  options={[{ value: "1", label: "1" }]}
                  handleChange={() => {}}
                  defaultValue={"1"}
                />
                <FormSelect
                  label="hit"
                  name="temp"
                  options={[{ value: "center", label: "center" }]}
                  handleChange={() => {}}
                  defaultValue={"center"}
                />
              </div>
            </div>

            <Button type="submit" label="create score card" />
          </Form>
        </>
      )}
    </div>
  );
};

export default ScoreCardForm;
