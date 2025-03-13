import Sessions from "./components/Sessions";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const UserSettings = () => {
  return (
    <div>
      <DashboardHeader heading="user settings" />
      <Sessions />
    </div>
  );
};

export default UserSettings;
