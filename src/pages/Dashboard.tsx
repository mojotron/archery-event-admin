import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { getLogout } from "../lib/api";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <header>
        <h2 className="font-passion-one text-main-300 uppercase text-2xl">
          Archery Event Control Dashboard
        </h2>
        <p className="font-source-code-pro text-main-300">
          current admin: {user?.firstName} {user?.lastName}
        </p>
      </header>
      <nav>
        <ul className="">
          <li
            className="font-bold text-main-100 cursor-pointer hover:text-sec-blue-500"
            onClick={() => navigate("seasons")}
          >
            seasons
          </li>
          <li
            className="font-bold text-main-100 cursor-pointer hover:text-sec-blue-500"
            onClick={() => navigate("tournaments")}
          >
            tournaments
          </li>
          <li
            className="font-bold text-main-100 cursor-pointer hover:text-error"
            onClick={() => getLogout()}
          >
            logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
