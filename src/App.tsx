import { Routes, Route, useNavigate, Navigate } from "react-router";
import { setNavigate } from "./lib/navigation";
// components
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import SectionLayout from "./components/layouts/SectionLayout";
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import TournamentDetails from "./pages/tournaments/TournamentDetails";
import TournamentCreateForm from "./pages/tournaments/TournamentCreateForm";
import TournamentDelete from "./pages/tournaments/TournamentDelete";
import TournamentEdit from "./pages/tournaments/TournamentEdit";
// pages auth
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import UserSettings from "./pages/settings/UserSettings";
// pages Club
import Clubs from "./pages/clubs/Clubs";
import CreateClubForm from "./pages/clubs/CreateClubForm";
import ClubDetails from "./pages/clubs/ClubDetails";
import ClubDelete from "./pages/clubs/ClubDelete";
import ClubEdit from "./pages/clubs/ClubEdit";
// pages Archer
import Archers from "./pages/archers/Archers";
import CreateArcherForm from "./pages/archers/CreateArcherForm";
import ArcherDetails from "./pages/archers/ArcherDetails";
import ArcherDelete from "./pages/archers/ArcherDelete";
import ArcherEdit from "./pages/archers/ArcherEdit";
// pages season
import Seasons from "./pages/seasons/Seasons";
import SeasonCreateForm from "./pages/seasons/SeasonCreateForm";
import SeasonDetails from "./pages/seasons/SeasonDetails";
import SeasonDelete from "./pages/seasons/SeasonDelete";
import SeasonEdit from "./pages/seasons/SeasonEdit";
import FinishedSeasons from "./pages/seasons/FinishedSeasons";
// pages scorecards
import ScorecardCreateForm from "./pages/scorecards/ScorecardCreateForm";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<UserSettings />} />

          <Route path="clubs" element={<SectionLayout section="clubs" />}>
            <Route index element={<Clubs />} />
            <Route path="create" element={<CreateClubForm />} />
            <Route path=":clubId" element={<ClubDetails />} />
            <Route path=":clubId/delete" element={<ClubDelete />} />
            <Route path=":clubId/edit" element={<ClubEdit />} />
          </Route>

          <Route path="archers" element={<SectionLayout section="archers" />}>
            <Route index element={<Archers />} />
            <Route path="create" element={<CreateArcherForm />} />
            <Route path=":archerId" element={<ArcherDetails />} />
            <Route path=":archerId/edit" element={<ArcherEdit />} />
            <Route path=":archerId/delete" element={<ArcherDelete />} />
          </Route>

          <Route path="seasons" element={<SectionLayout section="season" />}>
            <Route index element={<Seasons />} />
            <Route path="create" element={<SeasonCreateForm />} />
            <Route path=":seasonId" element={<SeasonDetails />} />
            <Route path=":seasonId/edit" element={<SeasonEdit />} />
            <Route path=":seasonId/delete" element={<SeasonDelete />} />
            <Route path="finished" element={<FinishedSeasons />} />
          </Route>

          <Route
            path="tournaments"
            element={<SectionLayout section="tournaments" />}
          >
            <Route index element={"list of tournaments"} />
            <Route path="create" element={<TournamentCreateForm />} />
            <Route path=":tournamentId" element={<TournamentDetails />} />
            <Route path=":tournamentId/delete" element={<TournamentDelete />} />
            <Route path=":tournamentId/edit" element={<TournamentEdit />} />
          </Route>
        </Route>

        <Route
          path="scorecards"
          element={<SectionLayout section="scorecards" />}
        >
          <Route path="create" element={<ScorecardCreateForm />} />
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
