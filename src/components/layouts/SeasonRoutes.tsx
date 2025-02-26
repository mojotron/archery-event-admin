import { Outlet, useNavigate } from "react-router";

const SeasonRoutes = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="font-passion-one text-main-300 text-2xl">
          Season control
        </h2>
        <nav>
          <ul className="flex items-center gap-1">
            <li
              className="font-bold text-main-100 cursor-pointer hover:text-sec-blue-500"
              onClick={() => navigate("/dashboard")}
            >
              dashboard
            </li>
            <li
              className="font-bold text-main-100 cursor-pointer hover:text-sec-blue-500"
              onClick={() => navigate("/dashboard/seasons")}
            >
              seasons
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default SeasonRoutes;
