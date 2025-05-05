import { Outlet, Navigate } from "react-router";
import useAuth from "../../hooks/auth/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";

const ProtectedRoutes = () => {
  const { user, isLoading } = useAuth();

  return (
    <>
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
    </>
  );
};

export default ProtectedRoutes;
