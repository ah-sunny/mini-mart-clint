import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { AddProduct } from "../pages/Dashboard/AddProduct";
import { MyProduct } from "../pages/Dashboard/MyProduct";
import { OverView } from "../pages/Dashboard/OverView";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
// import { Products } from "../pages/Products";
import UpdateProduct from "../component/product/UpdateProduct";
import { AllUsers } from "../pages/Dashboard/AllUsers";
import { Cart } from "../pages/Dashboard/Cart";
import { Wishlist } from "../pages/Dashboard/Wishlist";
import { Products } from "../pages/Products";
import Register from "../pages/Register";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


// const {user} = useAuth()


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard/overview',
          element: <OverView></OverView>
        },
        {
          path:'/dashboard/add-product',
          element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
        {
          path: "/dashboard/my-product",
          element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
        },
        {
          path: "/dashboard/update-page/:id",
          element: <SellerRoute><UpdateProduct></UpdateProduct></SellerRoute>
         
        },
        {
          path: "/dashboard/wishlist",
          element: <BuyerRoute><Wishlist></Wishlist></BuyerRoute>
        },
        {
          path: "/dashboard/cart",
          element: <BuyerRoute><Cart></Cart></BuyerRoute>
        },
        {
          path: '/dashboard/all-user',
          element: <AllUsers></AllUsers>
        }
        
      ]
    }
  ]);