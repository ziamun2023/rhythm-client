import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/signup/Signup";

import SigninAcc from "../pages/loginpage/SigninAcc";
import ClassPage from "../pages/classesPage/ClassPage";
import PrivateRoutes from "../private/PrivateRoutes";
import Dashboard from "../Dashboard/mainDashboard/Dashboard";
import MyCart from "../Dashboard/mycartitem/MyCart";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
          path: '/loginacc',
          element:<SigninAcc/>
        },
        {
          path: '/signup',
          element:<Signup/>
        },
        {
          path:'/allclass',
          element:<PrivateRoutes><ClassPage/></PrivateRoutes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        }
      
      ]
    }
  ]);