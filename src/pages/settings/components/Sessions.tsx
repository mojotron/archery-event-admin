import useSessions from "../../../hooks/sessions/useSessions";
import LoadingError from "../../../components/general/LoadingError";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import SessionCard from "./SessionCard";

const Sessions = () => {
  const { sessions, isPending, isError } = useSessions();

  return (
    <div>
      <h2 className="font-bold text-xl text-main-300 uppercase">Sessions</h2>

      {isPending && <LoadingSpinner />}
      {isError && <LoadingError />}

      {sessions && (
        <ul className="space-y-2">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sessions;
