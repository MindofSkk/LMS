import React from "react";
import { Navigate } from "react-router-dom";

export const AdminAuth = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("userdata"));

  if (token !== "123") {
    return <Navigate to="/login" />;
  }

  return children;
};
