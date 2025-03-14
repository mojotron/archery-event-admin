import LayoutHeader from "./components/LayoutHeader";
import { Outlet } from "react-router";

const ArchersLayout = () => {
  return (
    <>
      <LayoutHeader heading="archer controls" section="archers" />
      <Outlet />
    </>
  );
};

export default ArchersLayout;
