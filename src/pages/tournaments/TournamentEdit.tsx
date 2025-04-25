import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useMutateTournament from "../../hooks/tournaments/useMutateTournament";
import useTournament from "../../hooks/tournaments/useTournament";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import SectionHeading from "../../components/ui/SectionHeading";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import ChangeDataField from "../../components/general/ChangeDataField";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import SelectRules from "../../components/ui/SelectRules";
import FormRadio from "../../components/ui/FormRadio";
import FormInput from "../../components/ui/FormInput";
import { attendAtDateTime } from "../../utils/dateFormat";
import SelectClub from "../../components/ui/SelectClub";
import SelectSeason from "../../components/ui/SelectSeason";

type TournamentFields =
  | "title"
  | "description"
  | "address"
  | "rounds"
  | "rules"
  | "attendAt"
  | "isFinished"
  | "organizedById"
  | "seasonId";

const TournamentEdit = () => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament, isLoading, isError } = useTournament(tournamentId);

  const [tournamentField, setTournamentField] =
    useState<TournamentFields | null>(null);
  const [tournamentFieldValue, setTournamentFieldValue] = useState("");

  const {
    editTournament,
    isPending,
    isSuccess,
    isError: isUpdateError,
  } = useMutateTournament(tournamentId);

  useEffect(() => {
    if (isSuccess) {
      setTournamentField(null);
      setTournamentFieldValue("");
    }
  }, [isSuccess]);

  console.log(tournamentField, tournamentFieldValue);

  const submitHandler = () => {
    if (tournamentField === null) return;
    if (tournamentField === "rounds")
      editTournament({ rounds: parseInt(tournamentFieldValue) });
    else if (tournamentField === "isFinished")
      editTournament({
        isFinished: tournamentFieldValue === "finished" ? true : false,
      });
    else if (tournamentField === "attendAt")
      editTournament({
        attendAt: new Date(tournamentFieldValue).toISOString(),
      });
    else editTournament({ [tournamentField]: tournamentFieldValue });
  };

  return (
    <div className="p-4 flex gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to load archer data" />}

      {tournament && (
        <>
          <div className="space-y-4">
            <ButtonGoBack />
            <PageHeading>edit tournament</PageHeading>

            <ChangeDataField
              label="title"
              field={tournament.title}
              handleClick={() => {
                setTournamentField("title");
                setTournamentFieldValue(tournament.title);
              }}
            />

            <ChangeDataField
              label="description"
              field={tournament.description}
              handleClick={() => {
                setTournamentField("description");
                setTournamentFieldValue(tournament.description);
              }}
            />

            <ChangeDataField
              label="address"
              field={tournament.address}
              handleClick={() => {
                setTournamentField("address");
                setTournamentFieldValue(tournament.address);
              }}
            />

            <ChangeDataField
              label="attend at"
              field={attendAtDateTime(tournament.attendAt)}
              handleClick={() => {
                setTournamentField("attendAt");
                setTournamentFieldValue(tournament.attendAt);
              }}
            />

            <ChangeDataField
              label="rounds"
              field={tournament.rounds.toString()}
              handleClick={() => {
                setTournamentField("rounds");
                setTournamentFieldValue(tournament.rounds.toString());
              }}
            />

            <ChangeDataField
              label="season status"
              field={tournament.isFinished ? "finished" : "in progress"}
              handleClick={() => {
                setTournamentField("isFinished");
                setTournamentFieldValue(
                  tournament.isFinished ? "finished" : "active"
                );
              }}
            />

            <ChangeDataField
              label="rules"
              field={tournament.rules}
              handleClick={() => {
                setTournamentField("rules");
                setTournamentFieldValue(tournament.rules);
              }}
            />

            <ChangeDataField
              label="organizedBy"
              field={tournament.organizedBy.name}
              handleClick={() => {
                setTournamentField("organizedById");
                setTournamentFieldValue(tournament.organizedById || "none");
              }}
            />

            <ChangeDataField
              label="season"
              field={tournament.seasonId || "none"}
              handleClick={() => {
                setTournamentField("seasonId");
                setTournamentFieldValue(tournament.seasonId || "");
              }}
            />
          </div>

          {tournamentField !== null && (
            <div>
              <SectionHeading>update {tournamentField} field</SectionHeading>
              <Form onSubmit={submitHandler}>
                {isUpdateError && (
                  <LoadingError message="failed to update tournament data" />
                )}

                {(tournamentField === "title" ||
                  tournamentField === "description" ||
                  tournamentField === "address" ||
                  tournamentField === "rounds") && (
                  <FormInput
                    type={
                      tournamentField === "description"
                        ? "textarea"
                        : tournamentField === "rounds"
                        ? "number"
                        : "text"
                    }
                    label={tournamentField}
                    name={tournamentField}
                    value={tournamentFieldValue}
                    onChange={(e) => setTournamentFieldValue(e.target.value)}
                  />
                )}

                {tournamentField === "attendAt" && (
                  <FormInput
                    label="attend at"
                    type="datetime-local"
                    name="attendAt"
                    value={tournamentFieldValue}
                    onChange={(e) => setTournamentFieldValue(e.target.value)}
                  />
                )}

                {tournamentField === "isFinished" && (
                  <FormRadio
                    name="tournament status"
                    options={[
                      { label: "finished", value: "finished" },
                      { label: "active", value: "active" },
                    ]}
                    selected={tournamentFieldValue}
                    handleChange={(e) =>
                      setTournamentFieldValue(e.target.value)
                    }
                  />
                )}

                {tournamentField === "rules" && (
                  <SelectRules
                    selectedRule={tournament.rules}
                    onChange={(e) => setTournamentFieldValue(e.target.value)}
                  />
                )}

                {tournamentField === "organizedById" && (
                  <SelectClub
                    selectedClubId={tournament.organizedById || ""}
                    onChange={(e) => setTournamentFieldValue(e.target.value)}
                  />
                )}

                {tournamentField === "seasonId" && (
                  <SelectSeason
                    selectedSeasonId={tournament.seasonId || ""}
                    onChange={(e) => setTournamentFieldValue(e.target.value)}
                  />
                )}

                <Button
                  type="submit"
                  label="update"
                  isLoading={isPending}
                  isDisabled={
                    tournamentFieldValue === tournament[tournamentField]
                  }
                />
              </Form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TournamentEdit;
