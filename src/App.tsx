import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/admin_panel/Sidebar";
import Dashboard from "./pages/admin_panel/Dashboard";
import Companies from "@/pages/admin_panel/Companies";
import Login from "@/pages/admin_panel/Login";

function App() {
  return (
    <Router>
      {/* <div className="flex h-screen text-gray-200 bg-app-dark"> */}
      <div className="flex h-screen text-text bg-dark">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto bg-blue">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
