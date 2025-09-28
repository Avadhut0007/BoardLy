import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../pages/Welcome";
import { HomePage } from "../pages/HomePage";
import { BoardPage } from "../pages/BoardPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/board/:id" element={<BoardPage />} />
      {/* Catch-all: redirect unknown routes to welcome so refresh always lands on welcome */}
      <Route path="*" element={<Navigate to="/welcome" replace />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default AppRoutes;
