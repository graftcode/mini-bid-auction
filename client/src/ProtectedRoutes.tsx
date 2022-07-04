import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes: React.FC<{ authToken: string }> = ({ authToken }) => {
  if (!authToken) return <Navigate to="/" />;

  return <Outlet />;
};

export default ProtectedRoutes;
