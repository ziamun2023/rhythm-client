import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/loginpage/Login";
import Signup from "../pages/signup/Signup";

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
          path: '/login',
          element:<Login/>
        },
        {
          path: '/signup',
          element:<Signup/>
        }
      ]
    },
  ]);