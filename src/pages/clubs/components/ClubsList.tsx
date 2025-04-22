import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import LoadingError from "../../../components/general/LoadingError";
import SectionHeading from "../../../components/ui/SectionHeading";
import useClubs from "../../../hooks/clubs/useClubsList";
import ClubCard from "./ClubCard";

const ClubsList = () => {
  const { clubs, isLoading, isError } = useClubs();

  return (
    <div className="py-2">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch clubs data" />}

      <SectionHeading>clubs</SectionHeading>
      <ul className="space-y-2 mt-2">
        {clubs?.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </ul>
    </div>
  );
};

export default ClubsList;
