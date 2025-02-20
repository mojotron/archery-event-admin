import Button from "../components/ui/Button";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 text-main-100">
      <header>
        <span>Hello, {user?.firstName}</span>
      </header>
      <h2>Season</h2>
      <div>
        <h3>Active Season</h3>
      </div>
      <div>
        <h3>Past Season</h3>
      </div>
      <Button label="create new season" />
    </div>
  );
};

export default Dashboard;
