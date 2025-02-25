import { Outlet } from "react-router";

const SeasonRoutes = () => {
  return (
    <div className="p-4">
      <header>
        <h1>Seasons</h1>
      </header>

      <Outlet />
    </div>
  );
};

export default SeasonRoutes;
