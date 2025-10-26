import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin_panel/Dashboard";
import Companies from "@/pages/admin_panel/Companies";
import Login from "@/pages/admin_panel/Login";
import DashboardLayout from "@/layouts/DashboardLayout";
import AdminProtectedRoute from "@/layouts/AdminProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <div className="flex h-screen text-gray-200 bg-app-dark"> */}
        {/* Dashboard routes with layout */}
        <Route
          path="/"
          element={
            <AdminProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/companies"
          element={
            <AdminProtectedRoute>
              <DashboardLayout>
                <Companies />
              </DashboardLayout>
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
