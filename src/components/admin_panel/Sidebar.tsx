import { Home, BarChart2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    // <aside className="w-64 h-screen p-4 bg-white shadow-lg">
    //   <h1 className="mb-6 text-xl font-bold text-gray-800">Admin Panel</h1>
    //   <nav className="space-y-2">
    //     <Link
    //       to="/"
    //       className="flex items-center gap-2 p-2 text-gray-700 transition rounded hover:bg-gray-100 hover:text-blue-600"
    //     >
    //       <Home size={20} /> Dashboard
    //     </Link>
    //     <Link
    //       to="/companies"
    //       className="flex items-center gap-2 p-2 text-gray-700 transition rounded hover:bg-gray-100 hover:text-blue-600"
    //     >
    //       <Users size={20} /> Companies
    //     </Link>
    //     <Link
    //       to="/analytics"
    //       className="flex items-center gap-2 p-2 text-gray-700 transition rounded hover:bg-gray-100 hover:text-blue-600"
    //     >
    //       <BarChart2 size={20} /> Analytics
    //     </Link>
    //     <Link
    //       to="/users"
    //       className="flex items-center gap-2 p-2 text-gray-700 transition rounded hover:bg-gray-100 hover:text-blue-600"
    //     >
    //       <Users size={20} /> Users
    //     </Link>
    //   </nav>
    // </aside>

    <aside className="w-64 h-screen p-4 shadow-lg bg-purple text-text">
      <h1 className="mb-6 text-xl font-bold">Admin Panel</h1>
      <nav className="space-y-3">
        <Link
          to="/"
          className="flex items-center gap-2 p-2 transition rounded hover:bg-blue"
        >
          <Home size={20} /> Dashboard
        </Link>
        <Link
          to="/companies"
          className="flex items-center gap-2 p-2 transition rounded hover:bg-blue"
        >
          <Users size={20} /> Companies
        </Link>
      </nav>
    </aside>
  );
}
