import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/signup/Signup";

import SigninAcc from "../pages/loginpage/SigninAcc";



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
        }
      ]
    },
  ]);