import Sessions from "./components/Sessions";
import DashboardHeader from "../dashboard/components/DashboardHeader";

const UserSettings = () => {
  return (
    <div>
      <DashboardHeader heading="user settings" />
      <Sessions />
    </div>
  );
};

export default UserSettings;
