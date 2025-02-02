import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-gray-700">
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
