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
import AllStudent from "../Dashboard/allStudentProfile/AllStudent";
import StudentDashboard from "../Dashboard/StudetnDashboard/StudentDashboard";
import UserHome from "../Dashboard/StudetnDashboard/UserHome";
import AdminHome from "../Dashboard/mainDashboard/AdminHome";
import InstructorDashboard from "../Dashboard/instructorDash/InstructorDashboard";
import AddNewClass from "../Dashboard/instructorDash/AddNewClass";
import InstructorHome from "../Dashboard/instructorDash/InstructorHome";
import ManageClass from "../Dashboard/instructorDash/ManageClass";
import StudentOfInstructor from "../Dashboard/instructorDash/StudentOfInstructor";
import AllTheClassManagement from "../Dashboard/mainDashboard/AllTheClassManagement";





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
      path:'Admindashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
      
        {
          path:'allProfile',
          element:<AllStudent/>
        },
        {
          path:'adminHome',
          element:<AdminHome/>
        },
        {
          path:'totalclassmanagement',
          element:<AllTheClassManagement/>
        }
      
      
      ]
    },
    {
      path:'studentDash',
      element:<PrivateRoutes><StudentDashboard></StudentDashboard></PrivateRoutes>,
children:[
  
  {
    path:'mycart',
    element:<MyCart></MyCart>
  },
  {
    path:'userhome',
    element:<UserHome></UserHome>
  }
]
    },
    {
      path:'InstructorDashboard',
      element:<PrivateRoutes><InstructorDashboard></InstructorDashboard></PrivateRoutes>,
      children:[
        {
          path:'addnewclass',
          element:<AddNewClass></AddNewClass>
        },
        {
          path:'InstructorHome',
          element:<InstructorHome></InstructorHome>
        },
        {
          path:'manageclass',
          element:<ManageClass></ManageClass>
        },
        {
          path:'mystudents',
          element:<StudentOfInstructor></StudentOfInstructor>
        }
      ]
    }
  ]);