import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../components/aboutUs/About";
import { Contact } from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import { Product } from "../components/products/Product";
import { DashboardShop } from "../components/shop/DashboardShop";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<About />} />
        {/* path="product/:productId" */}
        <Route path="product" element={<Product />} />
        <Route path="shop" element={<DashboardShop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
