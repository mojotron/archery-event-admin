import { Outlet } from "react-router";
import LayoutHeader from "./components/LayoutHeader";

const ClubsLayout = () => {
  return (
    <>
      <LayoutHeader heading="club controls" section="clubs" />
      <Outlet />
    </>
  );
};

export default ClubsLayout;
