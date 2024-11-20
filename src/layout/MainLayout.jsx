
import { Outlet } from 'react-router-dom';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';




const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='min-h-screen' >
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayout;