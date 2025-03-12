import { Routes, Route, useNavigate, Navigate } from "react-router";
import { setNavigate } from "./lib/navigation";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import SeasonRoutes from "./components/layouts/SeasonRoutes";
import Dashboard from "./pages/Dashboard";
import Seasons from "./pages/Seasons";
import SeasonCreateForm from "./pages/seasons/SeasonCreateForm";
import SeasonDetails from "./pages/SeasonDetails";
import SeasonDelete from "./pages/SeasonDelete";
import SeasonEdit from "./pages/SeasonEdit";
import SeasonFinish from "./pages/SeasonFinish";
import TournamentRoutes from "./components/layouts/TournamentRoutes";
import TournamentDetails from "./pages/TournamentDetails";
import TournamentCreateForm from "./pages/TournamentCreateForm";
import TournamentDelete from "./pages/TournamentDelete";
import TournamentEdit from "./pages/TournamentEdit";
import TournamentFinish from "./pages/TournamentFinish";
import ScoreCardFormScandinavian3D from "./pages/ScoreCardFormScandinavian3D";
// pages auth
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import UserSettings from "./pages/settings/UserSettings";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<UserSettings />} />

          <Route path="seasons" element={<SeasonRoutes />}>
            <Route index element={<Seasons />} />
            <Route path="create" element={<SeasonCreateForm />} />
            <Route path=":seasonId" element={<SeasonDetails />} />
            <Route path=":seasonId/delete" element={<SeasonDelete />} />
            <Route path=":seasonId/edit" element={<SeasonEdit />} />
            <Route path=":seasonId/finish" element={<SeasonFinish />} />
          </Route>

          <Route path="tournaments" element={<TournamentRoutes />}>
            <Route index element={"list of tournaments"} />
            <Route path="create" element={<TournamentCreateForm />} />
            <Route path=":tournamentId" element={<TournamentDetails />} />
            <Route path=":tournamentId/delete" element={<TournamentDelete />} />
            <Route path=":tournamentId/edit" element={<TournamentEdit />} />
            <Route path=":tournamentId/finish" element={<TournamentFinish />} />
            <Route
              path=":tournamentId/add-score-card/:tournamentType"
              element={<ScoreCardFormScandinavian3D />}
            />
          </Route>
        </Route>
        {/* AUTH */}
        <Route path="/register" element={<Register />} />
        <Route path="/email/verify/:code" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/" element={<ResetPassword />} />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
};

export default App;
