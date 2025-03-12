import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import SectionHeading from "../../../components/ui/SectionHeading";
import useClubs from "../../../hooks/useClubs";
import ClubCard from "./ClubCard";

const ClubsList = () => {
  const { clubs, isLoading } = useClubs();

  return (
    <div>
      <SectionHeading>clubs list</SectionHeading>
      <ul className="space-y-2">
        {isLoading && <LoadingSpinner />}
        {clubs && clubs.map((club) => <ClubCard key={club.id} club={club} />)}
      </ul>
    </div>
  );
};

export default ClubsList;
