import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

const ProtectedRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (user) {
    return (
      <div>
        {user.isAdmin === true ? (
          <div>
            <Outlet />
          </div>
        ) : (
          <div>
            <h2>not admin</h2>
          </div>
        )}
      </div>
    );
  }
};

export default ProtectedRoutes;
