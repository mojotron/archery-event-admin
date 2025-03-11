import { Outlet, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";

const ProtectedRoutes = () => {
  const { user, isLoading } = useAuth();

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : user ? (
        <Outlet />
      ) : (
        <Navigate
          to="/login"
          replace={true}
          state={{ redirectUrl: window.location.pathname }}
        />
      )}
    </div>
  );
};

export default ProtectedRoutes;
