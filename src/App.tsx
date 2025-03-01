import { Routes, Route, useNavigate, Navigate } from "react-router";
import { setNavigate } from "./lib/navigation";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import SeasonRoutes from "./components/layouts/SeasonRoutes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Seasons from "./pages/Seasons";
import SeasonCreateForm from "./pages/SeasonCreateForm";
import SeasonDetails from "./pages/SeasonDetails";
import SeasonDelete from "./pages/SeasonDelete";
import SeasonEdit from "./pages/SeasonEdit";
import SeasonFinish from "./pages/SeasonFinish";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="seasons" element={<SeasonRoutes />}>
            <Route index element={<Seasons />} />
            <Route path="create" element={<SeasonCreateForm />} />
            <Route path=":seasonId" element={<SeasonDetails />} />
            <Route path=":seasonId/delete" element={<SeasonDelete />} />
            <Route path=":seasonId/edit" element={<SeasonEdit />} />
            <Route path=":seasonId/finish" element={<SeasonFinish />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
};

export default App;
