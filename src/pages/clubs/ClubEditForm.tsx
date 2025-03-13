import { useEffect, useState } from "react";
import useClub from "../../hooks/useClub";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import SectionHeading from "../../components/ui/SectionHeading";
import Form from "../../components/ui/Form";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";
import useClubMutate from "../../hooks/useClubMutate";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import ChangeDataField from "../../components/general/ChangeDataField";

type ClubField = "name" | "address";

const ClubEditForm = () => {
  const { clubId } = useParams() as { clubId: string };
  const { club, isLoading, isError } = useClub(clubId);

  const {
    updateClub,
    isPending,
    isSuccess,
    isError: isUpdateError,
  } = useClubMutate(clubId);

  const [clubField, setClubField] = useState<ClubField | null>(null);
  const [clubFieldValue, setClubFieldValue] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setClubField(null);
      setClubFieldValue("");
    }
  }, [isSuccess]);

  return (
    <div className="p-4 flex gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to load club data" />}

      {club && (
        <>
          <div className="space-y-4">
            <ButtonGoBack path="/dashboard/clubs" />
            <SectionHeading>Edit club</SectionHeading>

            <ChangeDataField
              label="name"
              field={club.name}
              handleClick={() => {
                setClubField("name");
                setClubFieldValue(club.name);
              }}
            />

            <ChangeDataField
              label="address"
              field={club.address}
              handleClick={() => {
                setClubField("address");
                setClubFieldValue(club.address);
              }}
            />
          </div>
          {clubField !== null && (
            <div>
              <SectionHeading>update {clubField} field</SectionHeading>
              <Form
                onSubmit={() => updateClub({ [clubField]: clubFieldValue })}
              >
                {isUpdateError && (
                  <LoadingError message="failed to update club data" />
                )}
                <FormInput
                  type="text"
                  name={clubField}
                  label={clubField}
                  value={clubFieldValue}
                  onChange={(e) => setClubFieldValue(e.target.value)}
                />

                <Button
                  label="update"
                  type="submit"
                  isLoading={isPending}
                  isDisabled={clubFieldValue === club[clubField]}
                />
              </Form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ClubEditForm;
