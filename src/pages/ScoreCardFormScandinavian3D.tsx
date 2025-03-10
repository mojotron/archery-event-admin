// hooks
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useTournament from "../hooks/useTournament";
import useUsersList from "../hooks/useUsersList";
// components
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ButtonGoBack from "../components/ui/ButtonGoBack";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import FormSelect from "../components/ui/FormSelect";
import Scandinavian3DTargetOptions from "../components/scorecards/Scandinavian3DTargetOptions";
// constants
import { SCANDINAVIAN3D_TARGETS_COUNT } from "../constants/score";
import { useMutation } from "@tanstack/react-query";
import { postScandinavian3DScorecard } from "../lib/api";
import { Scandinavian3DTargetType } from "../types/scorecardType";

const ScoreCardFormScandinavian3D = () => {
  const navigate = useNavigate();
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament, isLoading, isError } = useTournament(tournamentId);
  const { users } = useUsersList();

  const [archerId, setArcherId] = useState("--- pick user ---");
  const [targets, setTargets] = useState<Scandinavian3DTargetType[]>(() =>
    Array.from({ length: SCANDINAVIAN3D_TARGETS_COUNT }, () => {
      return { hit: "center", arrow: 1 };
    })
  );

  const userOptions = users
    ? [
        { label: "--- pick user ---", value: "" },
        ...users.map((user) => ({
          label: `${user.firstName} ${user.lastName}`,
          value: user.id,
        })),
      ]
    : [];

  const { mutate } = useMutation({
    mutationFn: () =>
      postScandinavian3DScorecard({ userId: archerId, tournamentId, targets }),
    onSuccess: () =>
      navigate(`/dashboard/tournaments/${tournamentId}`, { replace: true }),
  });

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
          <Form handler={mutate}>
            <FormSelect
              label="select archer"
              name="temp"
              options={userOptions}
              handleChange={(e) => setArcherId(e.target.value)}
              defaultValue={archerId}
            />

            {Array.from({ length: SCANDINAVIAN3D_TARGETS_COUNT }, (_, i) => {
              return (
                <Scandinavian3DTargetOptions
                  label={`Target ${i + 1}`}
                  selectedHit={targets[i].hit}
                  selectedArrow={targets[i].arrow.toString()}
                  onChangeHit={(e) =>
                    setTargets((oldSate) => {
                      const modify = oldSate.map((ele, j) =>
                        i === j ? { ...ele, hit: e.target.value } : ele
                      );
                      return modify as Scandinavian3DTargetType[];
                    })
                  }
                  onChangeArrow={(e) =>
                    setTargets((oldSate) => {
                      const modify = oldSate.map((ele, j) =>
                        i === j
                          ? { ...ele, arrow: parseInt(e.target.value) }
                          : ele
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

export default ScoreCardFormScandinavian3D;
