
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Dashboard-cmp/Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen " >
            <div className="col-span-2">
                
                <Sidebar></Sidebar>
            </div>
            <div className="col-span-10 p-2 lg:p-7" >
                <Outlet></Outlet>
            </div>
            
        </div>
    </div>
  );
};

export default DashboardLayout;