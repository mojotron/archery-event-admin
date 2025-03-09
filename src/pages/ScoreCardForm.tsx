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
import Scandinavian3DTargetOptions from "../components/scorecards/Scandinavian3DTargetOptions";

const targetNumber = 3;

const ScoreCardForm = () => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament, isLoading, isError } = useTournament(tournamentId);
  const { users } = useUsersList();

  const [formData, setFormData] = useState({ userId: "" });
  const [targets, setTargets] = useState(() =>
    Array.from({ length: targetNumber }, () => {
      return { hit: "center", arrow: "1" };
    })
  );

  const handlePickUser = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((oldState) => ({ ...oldState, userId: e.target.value }));
  };

  console.log(targets);

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

            {Array.from({ length: targetNumber }, (_, i) => {
              return (
                <Scandinavian3DTargetOptions
                  label={`Target ${i + 1}`}
                  selectedHit={targets[i].hit}
                  selectedArrow={targets[i].arrow}
                  onChangeHit={(e) =>
                    setTargets((oldSate) => {
                      const modify = oldSate.map((ele, j) =>
                        i === j ? { ...ele, hit: e.target.value } : ele
                      );
                      return modify;
                    })
                  }
                  onChangeArrow={(e) =>
                    setTargets((oldSate) => {
                      const modify = oldSate.map((ele, j) =>
                        i === j ? { ...ele, arrow: e.target.value } : ele
                      );
                      return modify;
                    })
                  }
                  key={i}
                />
              );
            })}

            <Button type="submit" label="create score card" />
          </Form>
        </>
      )}
    </div>
  );
};

export default ScoreCardForm;
