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

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Users />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/books" element={<Books />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addbooks" element={<AddBooks />} />
      <Route path="/userdetails" element={<UserDeatils />} />

      



    </Routes>
  );
};
