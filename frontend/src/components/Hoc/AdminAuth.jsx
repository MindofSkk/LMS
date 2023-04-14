import React from "react";
import { Navigate } from "react-router-dom";

export const AdminAuth = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const name = JSON.parse(localStorage.getItem("Name"));


  if (token !== "123" && name !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};
