import Sidebar from "@/components/admin_panel/Sidebar";


function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen text-text bg-dark">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-blue">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;