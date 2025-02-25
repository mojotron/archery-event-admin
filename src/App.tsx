import { Routes, Route, useNavigate, Navigate } from "react-router";
import { setNavigate } from "./lib/navigation";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import SeasonRoutes from "./components/layouts/SeasonRoutes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Seasons from "./pages/Seasons";
import SeasonCreateForm from "./pages/SeasonCreateForm";

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
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
};

export default App;
