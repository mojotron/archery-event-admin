import { Routes, Route, useNavigate } from "react-router";
import { setNavigate } from "./lib/navigation";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import Login from "./pages/Login";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={"what is matrix"} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
