// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  // If no user passed, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
