import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ isPublic = false }) {
  const auth = { token: sessionStorage.getItem("token") };
  
  if (isPublic) {
    return !auth.token ? <Outlet /> : <Navigate to="/dashboard" />;
  }

  return auth.token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
