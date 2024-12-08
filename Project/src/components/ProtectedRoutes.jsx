import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ element, roleRequired }) => {
  const role = localStorage.getItem("role");
  console.log(role)

  // Redirect logic based on role
  if (role === "employee" && roleRequired !== "employee") {
    return <Navigate to="/empDashboard" />;
  } else if (role === "admin" && roleRequired !== "admin") {
    return <Navigate to="/home" />;
  } else if (role === "product-manager" && roleRequired !== "product-manager") {
    return <Navigate to="/pmDashboard" />;
  } else if (!role) {
    return <Navigate to="/auth" />;
  }

 
  return element;
};

export default ProtectedRoutes;
