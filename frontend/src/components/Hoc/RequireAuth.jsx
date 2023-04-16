import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log(token);

  if (!token) {
    return <Navigate to="/login" />;
  }

 

  return children;
};
