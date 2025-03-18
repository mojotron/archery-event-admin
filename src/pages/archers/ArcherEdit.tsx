import { useParams } from "react-router";
import useArcher from "../../hooks/useArcher";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import SectionHeading from "../../components/ui/SectionHeading";
import ChangeDataField from "../../components/general/ChangeDataField";
import { useEffect, useState } from "react";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";
import Form from "../../components/ui/Form";
import useArcherMutate from "../../hooks/useArcherMutate";
import SelectClub from "./components/SelectClub";
import FormRadio from "../../components/ui/FormRadio";

type ArcherFields =
  | "firstName"
  | "lastName"
  | "username"
  | "email"
  | "clubId"
  | "public";

const ArcherEdit = () => {
  const { archerId } = useParams() as { archerId: string };
  const { archer, isLoading, isError } = useArcher(archerId);

  const [archerField, setArcherField] = useState<ArcherFields | null>(null);
  const [archerFieldValue, setArcherFieldValue] = useState("");

  const {
    updateArcher,
    isPending,
    isSuccess,
    isError: isUpdateError,
  } = useArcherMutate(archerId);

  useEffect(() => {
    if (isSuccess) {
      setArcherField(null);
      setArcherFieldValue("");
    }
  }, [isSuccess]);

  const submitHandler = () => {
    if (archerField === null) return;
    if (archerField === "public") {
      updateArcher({ public: archerFieldValue === "public" ? true : false });
    } else {
      updateArcher({ [archerField]: archerFieldValue });
    }
  };

  return (
    <div className="p-4 flex gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to load archer data" />}

      {archer && (
        <>
          <div className="space-y-4">
            <ButtonGoBack path={`/dashboard/archers/${archerId}`} />
            <SectionHeading>Edit Archer</SectionHeading>

            <ChangeDataField
              label="first name"
              field={archer.firstName}
              handleClick={() => {
                setArcherField("firstName");
                setArcherFieldValue(archer.firstName);
              }}
            />

            <ChangeDataField
              label="last name"
              field={archer.lastName}
              handleClick={() => {
                setArcherField("lastName");
                setArcherFieldValue(archer.lastName);
              }}
            />

            <ChangeDataField
              label="username"
              field={archer.username}
              handleClick={() => {
                setArcherField("username");
                setArcherFieldValue(archer.username);
              }}
            />

            <ChangeDataField
              label="email"
              field={archer.email || "undefined"}
              handleClick={() => {
                setArcherField("email");
                setArcherFieldValue(archer?.email || "");
              }}
            />

            <ChangeDataField
              label="club name"
              field={archer.club?.name || "undefined"}
              handleClick={() => {
                setArcherField("clubId");
                setArcherFieldValue(archer.clubId || "");
              }}
            />

            <ChangeDataField
              label="public"
              field={`${archer.public}`}
              handleClick={() => {
                setArcherField("public");
                setArcherFieldValue(archer.public ? "public" : "private");
              }}
            />
          </div>
          {archerField !== null && (
            <div>
              <SectionHeading>update {archerField} field</SectionHeading>

              <Form onSubmit={submitHandler}>
                {isUpdateError && (
                  <LoadingError message="failed to update archer data" />
                )}

                {archerField !== "clubId" && archerField !== "public" && (
                  <FormInput
                    type={archerField === "email" ? "email" : "text"}
                    label={archerField}
                    name={archerField}
                    value={archerFieldValue}
                    onChange={(e) => setArcherFieldValue(e.target.value)}
                  />
                )}

                {archerField === "clubId" && (
                  <SelectClub
                    currentClub={archer.club?.name || ""}
                    name={archerField}
                    onChange={(e) => setArcherFieldValue(e.target.value)}
                  />
                )}

                {archerField === "public" && (
                  <FormRadio
                    name={archerField}
                    options={[
                      { label: "public", value: "public" },
                      { label: "private", value: "private" },
                    ]}
                    selected={archerFieldValue}
                    handleChange={(e) => setArcherFieldValue(e.target.value)}
                  />
                )}

                <Button
                  label="update"
                  type="submit"
                  isLoading={isPending}
                  isDisabled={archerFieldValue === archer[archerField]}
                />
              </Form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ArcherEdit;
