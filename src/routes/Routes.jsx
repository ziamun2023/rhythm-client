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
import PrivateForAdmin from "../private/PrivateForAdmin";
import PrivateForInstructor from "../private/PrivateForInstructor";
import GiveFeedBack from "../Dashboard/mainDashboard/GiveFeedBack";
import ErrorHandle from "../pages/error/ErrorHandle";
import Allinstructor from "../pages/instructorPage/Allinstructor";






  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorHandle/>, 
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
          path: '/instructorPage',
          element:<Allinstructor/>
        },
        {
          path: '/signup',
          element:<Signup/>
        },
        {
          path:'/allclass',
          element:<PrivateRoutes><ClassPage/></PrivateRoutes>
        },
        {
          path:'*',
          element:<ErrorHandle/>
    
        }
      ]
    },
    {
      path:'Admindashboard',
      element:<PrivateForAdmin><Dashboard></Dashboard></PrivateForAdmin>,
      errorElement:<ErrorHandle/>, 
      children:[
      
        {
          path:'allProfile',
          element:<><AllStudent/></>
        },
        {
          path:'adminHome',
          element:<><AdminHome/></>
        },
        {
          path:'totalclassmanagement',
          element:<><AllTheClassManagement/></>
        },
        {
          path:'feedback/:id',
          element:<><GiveFeedBack/></>
        },
        {
          path:'*',
          element:<ErrorHandle/>
    
        }
      
      
      ]
    },
    {
      path:'studentDash',
      element:<PrivateRoutes><StudentDashboard></StudentDashboard></PrivateRoutes>,
      errorElement:<ErrorHandle/>, 
children:[
  
  {
    path:'mycart',
    element:<><MyCart></MyCart></>
  },
  {
    path:'userhome',
    element:<><UserHome></UserHome></>
  },
  {
    path:'*',
    element:<ErrorHandle/>

  }
]
    },
    {
      path:'InstructorDashboard',
      element:<PrivateForInstructor><InstructorDashboard></InstructorDashboard></PrivateForInstructor>,
      errorElement:<ErrorHandle/>, 
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
        },
        {
          path:'*',
          element:<ErrorHandle/>
    
        }
      ]
    }
  ]);