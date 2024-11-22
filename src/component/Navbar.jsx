import axios from "axios";
import { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";


export const Navbar = () => {
    const { user, logOut } = useAuth()
    const [cartNumber, setCartNumber] = useState(null)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                alert("user out done")
            })
            .catch(error => {
                console.error(error)
            })
        console.log("clicked")
    }


    useEffect(()=>{
        const fetch = async () => {
            axios.get(`http://localhost:4000/cart?email=${user?.email}`)
              .then(res => {
                // console.log(" receive",res.data)
                setCartNumber(res.data.cartCount)
      
              })
          }
          fetch()
    },[user])

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/products" >Products</NavLink></li>
                        <li><NavLink to="/contact" >Contact</NavLink></li>
                        <li><NavLink to="/about" >About Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><FaOpencart /> MiniMart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/products" >Products</NavLink></li>
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                    <li><NavLink to="/about" >About Us</NavLink></li>


                </ul>
            </div>
            <div className="navbar-end gap-1 ">
                {
                    user ?

                        <>
                        <Link to='/dashboard/cart' className="indicator mr-4">
                        <span className="indicator-item badge badge-sm px-1 badge-secondary">{cartNumber}+</span>
                            <LiaCartPlusSolid className="size-6 mr-1.5" />
                        </Link>
                        {/* <div>
                            <LiaCartPlusSolid className="size-8 mr-4" />
                        </div> */}

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div className="avatar">
                                        <div className=" w-9 rounded-full ">
                                            <img src={user?.photoURL ? user?.photoURL : '/public/rabbit.png'} />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><NavLink to='/dashboard/overview' >Dashboard</NavLink></li>
                                    <li onClick={handleSignOut} className=" mt-1 btn btn-outline btn-sm " >Logout</li>

                                </ul>
                            </div>

                        </>


                        :
                        <div>
                            <NavLink to='/Login' > <button className="btn btn-primary btn-outline " >Login</button> </NavLink>
                            <NavLink to="/register"> <button className="btn btn-primary " >Register</button> </NavLink>
                        </div>
                }


            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}
