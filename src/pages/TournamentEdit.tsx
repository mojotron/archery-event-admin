import { useState } from "react";
import { useParams } from "react-router";
import useTournament from "../hooks/useTournament";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ButtonGoBack from "../components/ui/ButtonGoBack";
import PageHeading from "../components/ui/PageHeading";
import Form from "../components/ui/Form";
import ButtonEdit from "../components/ui/ButtonEdit";
import TournamentAttendAt from "../components/tournaments/TournamentAttendAt";
import HighlightRecord from "../components/ui/HighlightRecord";
import ButtonIcon from "../components/ui/ButtonIcon";
import { MdCancel as IconCancel, MdCheck as IconConfirm } from "react-icons/md";
import FormInput from "../components/ui/FormInput";
import useTournamentUpdate from "../hooks/useTournamentUpdate";

type UpdateTournamentProperties =
  | "title"
  | "description"
  | "location"
  | "attendAt";

const TournamentEdit = () => {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading, isError, isSuccess } =
    useTournament(tournamentId);
  const {
    updateTournament,
    isPending,
    isError: isUpdateError,
  } = useTournamentUpdate(tournamentId);

  const [propertyName, setPropertyName] =
    useState<null | UpdateTournamentProperties>(null);
  const [propertyValue, setPropertyValue] = useState("");

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <p>failed to fetch tournament data</p>}

      {isSuccess && tournament && (
        <>
          <header>
            <ButtonGoBack path={`/dashboard/tournaments/${tournamentId}`} />
            <PageHeading>Edit Tournament Data</PageHeading>
          </header>
          <section>
            {propertyName && (
              <Form
                handler={() => {
                  updateTournament({
                    [propertyName]: propertyValue,
                  });
                  setPropertyName(null);
                  setPropertyValue("");
                }}
              >
                {isUpdateError && <p>failed to update</p>}
                <FormInput
                  type={propertyName === "attendAt" ? "datetime-local" : "text"}
                  label={
                    propertyName === "attendAt"
                      ? "date and time "
                      : propertyName
                  }
                  name={propertyName}
                  value={propertyValue}
                  handleChange={(e) => setPropertyValue(e.target.value)}
                />
                <div className="flex">
                  <ButtonIcon
                    label="cancel"
                    icon={<IconCancel className="text-error" />}
                    type="button"
                    clickHandler={() => {
                      setPropertyName(null);
                      setPropertyValue("");
                    }}
                  />
                  <ButtonIcon
                    type="submit"
                    isLoading={isPending}
                    icon={<IconConfirm className="text-sec-green-500" />}
                    label="update"
                  />
                </div>
              </Form>
            )}

            <div className="flex items-baseline gap-2">
              <HighlightRecord regular="title" highlighted={tournament.title} />
              <ButtonEdit clickHandler={() => setPropertyName("title")} />
            </div>

            <div className="flex items-baseline gap-2">
              <HighlightRecord
                regular="description"
                highlighted={tournament.description || ""}
              />

              <ButtonEdit clickHandler={() => setPropertyName("description")} />
            </div>

            <div className="flex items-baseline gap-2">
              <HighlightRecord
                regular="location"
                highlighted={tournament.location}
              />

              <ButtonEdit clickHandler={() => setPropertyName("location")} />
            </div>

            <div className="flex items-baseline gap-2">
              <TournamentAttendAt date={tournament.attendAt} />
              <ButtonEdit clickHandler={() => setPropertyName("attendAt")} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default TournamentEdit;
