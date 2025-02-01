import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
