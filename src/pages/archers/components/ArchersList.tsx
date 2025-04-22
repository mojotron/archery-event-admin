import useArcherList from "../../../hooks/archers/useArcherList";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import LoadingError from "../../../components/general/LoadingError";
import SectionHeading from "../../../components/ui/SectionHeading";
import ArcherCard from "./ArcherCard";

const ArchersList = () => {
  const { archers, isLoading, isError } = useArcherList();

  return (
    <div className="py-2">
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError message="failed to fetch archers data" />}

      <SectionHeading>archers</SectionHeading>
      <ul className="space-y-2 mt-2">
        {archers?.map((archer) => (
          <ArcherCard key={archer.id} archer={archer} />
        ))}
      </ul>
    </div>
  );
};

export default ArchersList;
