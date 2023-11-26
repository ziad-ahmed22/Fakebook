import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RequireBack = () => {
  const { isAuth } = useAuth();

  if (isAuth) {
    // window.history.back();
    return <Navigate to="/feed" />;
  } else {
    return <Outlet />;
  }
};
