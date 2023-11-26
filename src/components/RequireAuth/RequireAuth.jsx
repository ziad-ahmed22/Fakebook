import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RequireAuth = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};
