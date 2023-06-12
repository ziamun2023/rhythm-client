import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import UseFavCart from "../hooks/UseFavCart";
import DayNightToggle from 'react-day-and-night-toggle'
import admin from '../assets/icons8-admin-50 (1).png'
import instructorIcon from '../assets/icons8-training-50.png'
// import { allusers } from "../hooks/user";

import Allusers from "../hooks/Allusers";
const Navbar = () => {


  // const [adminIsHere,setAdminIsHere]=useState('')
// console.log(adminIsHere)
  const { user, logOut,admins ,setIsDarkMode,isDarkMode,instructors} = useContext(AuthContext);
  // console.log(instructors)
  // console.log(user.email)
  // const student=user?.email
  // console.log(student)
  // console.log(admins)
  const alluser=Allusers()
  // console.log(alluser)


  const AdminAccess=admins.find(AdminUser=>AdminUser.email===user?.email)
  const instructorAccess=instructors.find(intruc=>intruc.email===user?.email)
  console.log(instructorAccess)

if(AdminAccess){
 var  isVisible=true
}
if(instructorAccess){
  var  isVisible=true
 }

// const handlechange=()=>{
//   console.log('change')
// }



// const adminPanel=Allusers()

const [cart]=UseFavCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div  className={"navbar nav text-black font-bold  shadow-md rounded-b-xl  sticky top-0 z-10 "}>
      
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul

            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Instructors</a>
            </li>
            <Link to="/allclass">
              <li>
                <a>Classes</a>
              </li>
            </Link>
            <Link to="/loginacc">
              <li>
                <a>login</a>
              </li>
            </Link>
            {/* <li>
              <a>Dashboard</a>
            </li> */}
          </ul>
        </div>
              {/* <ul class="circles">
          
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
  </ul> */}
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="my-auto">
            <a>Home</a>
          </li>
         
          <li className="my-auto">
            <a>Instructors</a>
          </li>
          <li className="my-auto">
          <Link to="/allclass">
          <a>Classes</a>
          </Link>  
            </li>
            <li className="my-auto">
            <Link to="/loginacc">
            <a>login</a>
          </Link>
             
              </li>
         
          {/* <li>
            <a>Dashboard</a>
          </li> */}
      {
        AdminAccess  &&
        <>  
             
<Link to='/Admindashboard/adminHome'>
<li className="my-auto" >
      
<div className="flex bg-white">
    
    <p>Admin</p> <img className="w-8" src={admin} alt="" />
</div>  
      </li> 
   
    </Link>
           </>
      }
      {
      user ?
      <>    <Link to='studentDash/mycart'>
      <li>
        <div  className={isVisible ? 'hidden' : 'block '}>
      <p>  Student Dashboard </p>
          <div className="badge badge-secondary">{cart?.length}</div>
        </div>
      </li>
    </Link></>: ''
      }{
        instructorAccess &&  <Link to='/InstructorDashboard/instructorhome'>
        <li className="my-auto" >
              
        <div className="flex bg-white">
            
            <p>Instructor</p> <img className="w-8" src={instructorIcon} alt="" />
        </div>  
              </li> 
           
            </Link>
      }
      <li>
      <div className="mx-10">
 <DayNightToggle 
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />

 </div>
      </li>
        </ul>
      </div>
 
      <div className="navbar-end">
        

        {user ? (
          <a onClick={handleLogOut} className="btn">
            
            Log out
          </a>
        ) : (
          <a className="btn"><Link to="/signup">sign up</Link></a>
        )}
      </div>
      
      
    </div>
  );
};

export default Navbar;
