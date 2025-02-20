import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";

const ProtectedRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  if (user) {
    return (
      <>
        {user.isAdmin === true ? (
          <>
            <Outlet />
          </>
        ) : (
          <>
            <h2>not admin</h2>
          </>
        )}
      </>
    );
  }
};

export default ProtectedRoutes;
