// components
import ClubsList from "./components/ClubsList";
import CreateClubForm from "./components/CreateClubForm";

const Clubs = () => {
  return (
    <div className="px-4 w-full flex gap-8">
      <ClubsList />
      <CreateClubForm />
    </div>
  );
};

export default Clubs;
