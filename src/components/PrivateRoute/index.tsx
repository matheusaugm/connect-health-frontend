import React from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { useUser } from "@/stores/UserStore";

const PrivateRoute = ({ children }: RouteProps) => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
