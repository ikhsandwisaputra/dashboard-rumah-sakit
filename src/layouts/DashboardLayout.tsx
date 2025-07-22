// pages/Dashboard.tsx
import Sidebar from '~/components/Sidebar';
import { Outlet } from 'react-router-dom';
import DashboardNav from '~/components/DashboardNav';

const Dashboard = () => {
  return (
    <div className="min-h-screen text-brand-text-primary">
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 p-2 lg:ml-[250px]">
        <DashboardNav/>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
