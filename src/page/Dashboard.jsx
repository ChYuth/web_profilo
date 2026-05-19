import Sidebar from "../components/Dashboard/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] bg-gray-100 flex gap-3 lg:gap-4">
      <Sidebar />
      <div className="flex-1 min-w-0 rounded-xl bg-white p-4 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
