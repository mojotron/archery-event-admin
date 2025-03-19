import LayoutHeader from "./components/LayoutHeader";
import { Outlet } from "react-router";

const SeasonLayout = () => {
  return (
    <>
      <LayoutHeader heading="season control" section="seasons" />
      <Outlet />
    </>
  );
};

export default SeasonLayout;
