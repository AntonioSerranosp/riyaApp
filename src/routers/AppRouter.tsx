import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../components/aboutUs/About";
import { Contact } from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import { LogIn } from "../components/login/LogIn";
import { Product } from "../components/products/Product";
import { DashboardShop } from "../components/shop/DashboardShop";
import { ShopCart } from "../components/shop/ShopCart";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        />
        <Route path="/*" element={<DashboardRoutes />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        <Route path="/shoping-cart" element={<ShopCart />} />
        <Route path="/*" element={<PrivateRoute></PrivateRoute>} />
      </Routes>
    </>
  );
};
