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
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: '/dashboard/overview',
          element: <OverView></OverView>
        },
        {
          path:'/dashboard/add-product',
          element: <AddProduct></AddProduct>
        },
        {
          path: "/dashboard/my-product",
          element: <MyProduct></MyProduct>
        },
        {
          path: "/dashboard/update-page/:id",
          element: <UpdateProduct></UpdateProduct>,
         
        },
        {
          path: "/dashboard/wishlist",
          element: <Wishlist></Wishlist>
        },
        {
          path: "/dashboard/cart",
          element: <Cart></Cart>
        },
        {
          path: '/dashboard/all-user',
          element: <AllUsers></AllUsers>
        }
        
      ]
    }
  ]);