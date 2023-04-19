import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Layouts from "../pages/Layouts";
import Dashboard from "../pages/Dashboard";
import SoldProducts from "../pages/SoldProducts";
import Products from "../pages/Products";
import Profile from "../pages/Profile";

export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layouts />}>
        <Route index element={<Dashboard />} />
        <Route path="/sold-products" element={<SoldProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
