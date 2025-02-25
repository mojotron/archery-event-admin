import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-4 text-main-100">
      <header>
        <span>Hello, {user?.firstName}</span>
      </header>
      <nav>
        <ul>
          <li onClick={() => navigate("seasons")}>seasons</li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
