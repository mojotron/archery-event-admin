import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh]">
      <Routes>
        <Route path="/" element={"hello world"} />
      </Routes>
    </div>
  );
};

export default App;
