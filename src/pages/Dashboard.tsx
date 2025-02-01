import { useQuery } from "@tanstack/react-query";
import React from "react";
import { healthCheck } from "../lib/api";

const Dashboard = () => {
  const { isSuccess } = useQuery({
    queryKey: ["health"],
    queryFn: () => healthCheck(),
  });

  return (
    <div>
      Dashboard
      {isSuccess && <h1>DONE!</h1>}
    </div>
  );
};

export default Dashboard;
