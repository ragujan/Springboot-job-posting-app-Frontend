import { Users, DollarSign, BarChart2 } from "lucide-react";
import CardStat from '@/components/admin_panel/CardStat';

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-text">
        Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CardStat title="Users" value="1,234" icon={<Users />} />
        <CardStat title="Revenue" value="$56,789" icon={<DollarSign />} />
        <CardStat title="Growth" value="12%" icon={<BarChart2 />} />
      </div>

      {/* Optional: Quick Action Buttons */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-text">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 transition rounded-lg bg-accent text-text hover:bg-hover">
            Add User
          </button>
          <button className="px-4 py-2 transition rounded-lg bg-accent text-text hover:bg-hover">
            Add Company
          </button>
          <button className="px-4 py-2 transition rounded-lg bg-accent text-text hover:bg-hover">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
