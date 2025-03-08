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
import TournamentRoutes from "./components/layouts/TournamentRoutes";
import TournamentDetails from "./pages/TournamentDetails";
import TournamentCreateForm from "./pages/TournamentCreateForm";
import TournamentDelete from "./pages/TournamentDelete";
import TournamentEdit from "./pages/TournamentEdit";
import TournamentFinish from "./pages/TournamentFinish";
import ScoreCardForm from "./pages/ScoreCardForm";

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
          <Route path="tournaments" element={<TournamentRoutes />}>
            <Route index element={"list of tournaments"} />
            <Route path="create" element={<TournamentCreateForm />} />
            <Route path=":tournamentId" element={<TournamentDetails />} />
            <Route path=":tournamentId/delete" element={<TournamentDelete />} />
            <Route path=":tournamentId/edit" element={<TournamentEdit />} />
            <Route path=":tournamentId/finish" element={<TournamentFinish />} />
            <Route
              path=":tournamentId/score-card"
              element={<ScoreCardForm />}
            />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
};

export default App;
