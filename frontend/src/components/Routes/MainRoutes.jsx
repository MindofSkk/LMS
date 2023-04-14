import React from "react";
import { Home } from "../pages/Home";
import { Route, Routes } from "react-router-dom";

import { Admin } from "../Admin/Admin";
import { Users } from "../User/Users";
import { Books } from "../pages/Books";
import { Login } from "../User/Login";
import { Signup } from "../User/Signup";
import { AddBooks } from "../Admin/AddBooks";
import { UserDeatils } from "../Admin/UserDeatils";
import { Isuuedbooks } from "../pages/Isuuedbooks";
import { RequireAuth } from "../Hoc/RequireAuth";
import { AdminAuth } from "../Hoc/AdminAuth";
import { EditBook } from "../Admin/EditBook";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Users />} />
      <Route
        path="/admin"
        element={
          <AdminAuth>
            {" "}
            <Admin />
          </AdminAuth>
        }
      />

      <Route
        path="/books"
        element={
          <RequireAuth>
            <Books />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addbooks" element={<AddBooks />} />
      <Route path="/userdetails" element={<UserDeatils />} />
      <Route path="/isuuedbooks" element={<Isuuedbooks />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  );
};
