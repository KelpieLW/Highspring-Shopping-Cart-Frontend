import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ShoppingCart" element={<CartPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
