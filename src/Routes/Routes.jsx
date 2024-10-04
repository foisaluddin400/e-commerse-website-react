import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Contact from "../Page/Contact";
import Login from "../Page/Login";
import About from "../Page/About";
import Smartwatch from "../Page/smartwatch";
import Computer from "../Page/computer";
import Camera from "../Page/Camera";
import Games from "../Page/games";
import ProductDetails from "../Page/ProductDetails";
import Register from "../Page/Register";
import MyCart from "../Page/MyCart";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import UserHome from "../Dashboard/UserHome";
import UserPayment from "../Dashboard/UserPayment";
import MyAdress from "../Dashboard/MyAdress";
import AdminOrder from "../Dashboard/AdminOrder";
import AdminHome from "../Dashboard/AdminHome";
import AdminAddItems from "../Dashboard/AdminAddItems";
import AdminAllUser from "../Dashboard/AdminAllUser";
import EditItems from "../Dashboard/EditItems";
import OurShop from "../Page/OurShop";
import PrivetRouter from "../PrivetRout/PrivetRouter";
import WishList from "../Page/WishList";
import AddminMenuUpdate from "../Dashboard/AddminMenuUpdate";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/smart",
        element: <Smartwatch></Smartwatch>,
      },
      {
        path: "/computer",
        element: <Computer></Computer>,
      },
      {
        path: "/camera",
        element: <Camera></Camera>,
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/shop",
        element: <PrivetRouter><OurShop></OurShop></PrivetRouter>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) => {
          // Fetch the specific product by its MongoDB _id from the backend API
          const res = await fetch(`http://localhost:5000/menu/${params.id}`);
          if (!res.ok) {
            throw new Error('Failed to fetch product details');
          }
          return res.json(); // Return the product data as JSON
        },
      },



      //user dashboard
      
      {
        path: "/",
        element: <DashboardNavbar></DashboardNavbar>,
        children: [
          {
            path: "/userhome",
            element: <UserHome></UserHome>
          },
          {
            path: "/mycart",
            element: <MyCart></MyCart>,
          },
          {
            path: "/payment",
            element: <UserPayment></UserPayment>
          },
          {
            path: "/myadress",
            element: <MyAdress></MyAdress>
          },
          {
            path: "/wishlist",
            element: <WishList></WishList>
          },
          
    
          //admin
          {
            path: "/adminorder",
            element: <AdminOrder></AdminOrder>
          },
          {
            path: "/adminhome",
            element: <AdminHome></AdminHome>
          },
          {
            path: "/adminadditems",
            element: <AdminAddItems></AdminAddItems>
          },
          {
            path: "/adminalluser",
            element: <AdminAllUser></AdminAllUser>
          },
          {
            path: "/edititems",
            element: <EditItems></EditItems>
          },
          {
            path: "/updateitems/:id",
            element: <AddminMenuUpdate></AddminMenuUpdate>,
            loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
          },
        ]
      },
      


    ],
  },
]);
