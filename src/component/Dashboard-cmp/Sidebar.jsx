import { BsCart4 } from "react-icons/bs";
import { FaCartPlus, FaOpencart, FaUsers } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { SiHomeadvisor } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUSerData";

const Sidebar = () => {
    const userData = useUserData()
    const { logOut } = useAuth()
    return (
        <div className="bg-gray-300 border-r-2 border-r-black min-h-screen p-1 lg:p-5" >
            <h1 className="text-base lg:text-3xl font-medium lg:font-bold mx-auto text-center my-7 " >Gadget Shop</h1>
            <div>
                <ul className="flex flex-col gap-3 pl-1 font-semibold" >
                    <li>
                        <NavLink to="/dashboard/overview" className="flex  justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2  w-full  border-2 rounded-md border-black p-1 "
                        >
                            <GrOverview />
                            Overview</NavLink>
                    </li>


                    {/* buyer sidebar */}
                    {
                        userData.role === 'buyer' &&
                        <>
                            <li>
                                <Link to="/dashboard/wishlist" className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1" >
                                    <GiSelfLove />
                                    wishlist</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/cart" className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1" >
                                    <BsCart4 />
                                    cart</Link>
                            </li>
                        </>
                    }


                    {/* seller sidebar */}
                    {
                        userData.role === 'seller' &&
                        <>
                            <li>
                                <Link to="/dashboard/my-product" className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1"

                                >
                                    <FaOpencart />
                                    My Product</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/add-product" className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1" >
                                    <FaCartPlus />
                                    Add Product</Link>
                            </li>


                        </>
                    }
                    {/* admin */}{
                        userData.role === 'admin' &&
                        <>
                            <li>
                                <Link to="/dashboard/all-user" className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1" >
                                    <FaUsers />
                                    All user</Link>
                            </li>
                        </>
                    }

                    <li>
                        <Link to="/" className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1" >
                            <SiHomeadvisor />
                            Home</Link>
                    </li>
                    <button className="flex justify-center items-center flex-col lg:flex-row text-xs lg:text-lg gap-0 lg:gap-2 border-2 rounded-md border-black p-1" onClick={() => logOut()}><Link to='/'>Logout</Link></button>
                </ul>


            </div>

        </div>
    );
};

export default Sidebar;