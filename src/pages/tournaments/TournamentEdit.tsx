import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useMutateTournament from "../../hooks/tournaments/useMutateTournament";
import useTournament from "../../hooks/tournaments/useTournament";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import LoadingError from "../../components/general/LoadingError";

type TournamentFields = "title";

const TournamentEdit = () => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament, isLoading, isError } = useTournament(tournamentId);

  const [tournamentField, setTournamentField] =
    useState<TournamentFields | null>(null);
  const [tournamentFiledValue, setTournamentFieldValue] = useState("");

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

  const submitHandler = () => {};

  return (
    <div className="p-4 flex gap-8">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to load archer data" />}
    </div>
  );
};

export default TournamentEdit;
