import { Outlet } from '@tanstack/react-router';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
