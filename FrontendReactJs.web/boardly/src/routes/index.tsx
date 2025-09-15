import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../pages/Welcome";
import { HomePage } from "../pages/HomePage";
import { BoardPage } from "../pages/BoardPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/board/:id" element={<BoardPage />} />
    </Routes>
  );
}

export default AppRoutes;


