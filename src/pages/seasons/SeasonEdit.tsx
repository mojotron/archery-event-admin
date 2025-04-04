import React from "react";
import { useParams } from "react-router";
import useSeason from "../../hooks/season/useSeason";
// components
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";
import ButtonGoBack from "../../components/ui/ButtonGoBack";
import PageHeading from "../../components/ui/PageHeading";
import ChangeDataField from "../../components/general/ChangeDataField";

type SeasonFields =
  | "title"
  | "description"
  | "tournamentCount"
  | "rules"
  | "isFinished";

const SeasonEdit = () => {
  const { seasonId } = useParams() as { seasonId: string };
  const { season, isLoading, isError } = useSeason(seasonId);

  return (
    <div className="p-4 flex gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to load archer data" />}

      {season && (
        <>
          <div>
            <ButtonGoBack path={`/dashboard/seasons/${seasonId}`} />
            <PageHeading>Edit Season</PageHeading>

            <ChangeDataField label="" field="" handleClick={() => {}} />
          </div>
        </>
      )}
    </div>
  );
};

export default SeasonEdit;
