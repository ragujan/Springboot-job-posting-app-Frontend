import { isAdmin } from "@/utils/auth";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function AdminProtectedRoute({ children }: Props) {
  if (!isAdmin()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>; // just render whatever layout/page you pass
}