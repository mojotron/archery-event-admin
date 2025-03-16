import { useParams } from "react-router";
import useArcher from "../../hooks/useArcher";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import SectionHeading from "../../components/ui/SectionHeading";
import ChangeDataField from "../../components/general/ChangeDataField";
import { useState } from "react";

type ArcherFields =
  | "firstName"
  | "lastName"
  | "username"
  | "email"
  | "club"
  | "public";

const ArcherEdit = () => {
  const { archerId } = useParams() as { archerId: string };
  const { archer, isLoading, isError } = useArcher(archerId);

  const [archerField, setArcherField] = useState<ArcherFields | null>(null);

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
              }}
            />

            <ChangeDataField
              label="last name"
              field={archer.lastName}
              handleClick={() => {
                setArcherField("lastName");
              }}
            />

            <ChangeDataField
              label="username"
              field={archer.username}
              handleClick={() => {
                setArcherField("username");
              }}
            />

            <ChangeDataField
              label="email"
              field={archer.email || "undefined"}
              handleClick={() => {
                setArcherField("email");
              }}
            />

            <ChangeDataField
              label="club name"
              field={archer.club?.name || "undefined"}
              handleClick={() => {
                setArcherField("club");
              }}
            />

            <ChangeDataField
              label="public"
              field={`${archer.public}`}
              handleClick={() => {
                setArcherField("public");
              }}
            />
          </div>
          {archerField !== null && (
            <div>
              <SectionHeading>update {archerField} field</SectionHeading>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ArcherEdit;
