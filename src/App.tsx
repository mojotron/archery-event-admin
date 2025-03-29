import { Routes, Route, useNavigate, Navigate } from "react-router";
import { setNavigate } from "./lib/navigation";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import Seasons from "./pages/seasons/Seasons";
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
// pages Club
import ClubsLayout from "./layouts/ClubsLayout";
import Clubs from "./pages/clubs/Clubs";
import ClubDelete from "./pages/clubs/ClubDelete";
import ClubEdit from "./pages/clubs/ClubEdit";
// pages archery
import ArchersLayout from "./layouts/ArchersLayout";
import Archers from "./pages/archers/Archers";
import CreateArcherForm from "./pages/archers/CreateArcherForm";
import ArcherDetails from "./pages/archers/ArcherDetails";
import ArcherDelete from "./pages/archers/ArcherDelete";
import ArcherEdit from "./pages/archers/ArcherEdit";
import SeasonLayout from "./layouts/SeasonLayout";
import SeasonCreateForm from "./pages/seasons/SeasonCreateForm";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<UserSettings />} />

          <Route path="clubs" element={<ClubsLayout />}>
            <Route index element={<Clubs />} />
            <Route path=":clubId/delete" element={<ClubDelete />} />
            <Route path=":clubId/edit" element={<ClubEdit />} />
          </Route>

          <Route path="archers" element={<ArchersLayout />}>
            <Route index element={<Archers />} />
            <Route path="create" element={<CreateArcherForm />} />
            <Route path=":archerId" element={<ArcherDetails />} />
            <Route path=":archerId/edit" element={<ArcherEdit />} />
            <Route path=":archerId/delete" element={<ArcherDelete />} />
          </Route>

          <Route path="seasons" element={<SeasonLayout />}>
            <Route index element={<Seasons />} />
            <Route path="create" element={<SeasonCreateForm />} />
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
