import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useSeason from "../../hooks/season/useSeason";
// components
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import ChangeDataField from "../../components/general/ChangeDataField";
import useMutateSeason from "../../hooks/season/useMutateSeason";
import SectionHeading from "../../components/ui/SectionHeading";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import FormRadio from "../../components/ui/FormRadio";
import SelectRules from "../../components/ui/SelectRules";

type SeasonFields =
  | "title"
  | "description"
  | "tournamentCount"
  | "rules"
  | "isFinished";

const SeasonEdit = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError } = useSeason(seasonId);

  const [seasonField, setSeasonField] = useState<SeasonFields | null>(null);
  const [seasonFiledValue, setSeasonFieldValue] = useState("");

  const {
    editSeason,
    isPending,
    isSuccess,
    isError: isUpdateError,
  } = useMutateSeason(seasonId);

  useEffect(() => {
    if (isSuccess) {
      setSeasonField(null);
      setSeasonFieldValue("");
    }
  }, [isSuccess]);

  const submitHandler = () => {
    if (seasonField === null) return;
    editSeason({ [seasonField]: seasonFiledValue });
  };

  return (
    <div className="p-4 flex gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to load archer data" />}

      {season && (
        <>
          <div className="space-y-4">
            <ButtonGoBack path={`/dashboard/seasons/${seasonId}`} />
            <PageHeading>Edit Season</PageHeading>

            <ChangeDataField
              label="title"
              field={season.title}
              handleClick={() => {
                setSeasonField("title");
                setSeasonFieldValue(season.title);
              }}
            />

            <ChangeDataField
              label="description"
              field={season.description}
              handleClick={() => {
                setSeasonField("description");
                setSeasonFieldValue(season.description);
              }}
            />

            <ChangeDataField
              label="number of tournaments"
              field={season.tournamentCount.toString()}
              handleClick={() => {
                setSeasonField("tournamentCount");
                setSeasonFieldValue(season.tournamentCount.toString());
              }}
            />

            <ChangeDataField
              label="season status"
              field={season.isFinished ? "finished" : "in progress"}
              handleClick={() => {
                setSeasonField("isFinished");
                setSeasonFieldValue(season.isFinished ? "finished" : "active");
              }}
            />

            {season.tournaments.length === 0 && (
              <ChangeDataField
                label="rules"
                field={season.rules}
                handleClick={() => {
                  setSeasonField("rules");
                  setSeasonFieldValue(season.rules);
                }}
              />
            )}
          </div>

          {seasonField !== null && (
            <div>
              <SectionHeading>update {seasonField} field</SectionHeading>
              <Form onSubmit={submitHandler}>
                {isUpdateError && (
                  <LoadingError message="failed to update season data" />
                )}

                {(seasonField === "title" ||
                  seasonField === "description" ||
                  seasonField === "tournamentCount") && (
                  <FormInput
                    type={
                      seasonField === "title"
                        ? "text"
                        : seasonField === "description"
                        ? "textarea"
                        : "number"
                    }
                    label={seasonField}
                    name={seasonField}
                    value={seasonFiledValue}
                    onChange={(e) => setSeasonFieldValue(e.target.value)}
                  />
                )}

                {seasonField === "isFinished" && (
                  <FormRadio
                    name="season status"
                    options={[
                      { label: "finished", value: "finished" },
                      { label: "active", value: "active" },
                    ]}
                    selected={seasonFiledValue}
                    handleChange={(e) => setSeasonFieldValue(e.target.value)}
                  />
                )}

                {seasonField === "rules" && (
                  <SelectRules
                    currentRule={season.rules}
                    name="rules"
                    onChange={(e) => setSeasonFieldValue(e.target.value)}
                  />
                )}

                <Button
                  type="submit"
                  label="update"
                  isLoading={isPending}
                  isDisabled={seasonFiledValue === season[seasonField]}
                />
              </Form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SeasonEdit;
