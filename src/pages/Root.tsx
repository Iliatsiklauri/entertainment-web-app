import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <div className="bg-[#10141E] h-screen w-screen flex flex-col items-center">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
