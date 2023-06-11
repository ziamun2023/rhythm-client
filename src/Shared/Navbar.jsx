import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import UseFavCart from "../hooks/UseFavCart";
import DayNightToggle from 'react-day-and-night-toggle'
// import { allusers } from "../hooks/user";

import Allusers from "../hooks/Allusers";
const Navbar = () => {


  // const [adminIsHere,setAdminIsHere]=useState('')
// console.log(adminIsHere)
  const { user, logOut,admins ,setIsDarkMode,isDarkMode} = useContext(AuthContext);
  const student=user?.email
  console.log(student)
  console.log(admins)
  const alluser=Allusers()
  console.log(alluser)


  const AdminAccess=admins.find(AdminUser=>AdminUser.email===user?.email)

if(AdminAccess){
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
      {
        AdminAccess  &&
        <>    <Link to='/Admindashboard/adminHome'>
        <li>
          <button className="btn">
           Admin
          
          </button>
        </li>
      </Link></>
      }
      {
      user ?
      <>    <Link to='studentDash/mycart'>
      <li>
        <button  className={isVisible ? 'hidden' : 'block btn'}>
        class 
          <div className="badge badge-secondary">{cart?.length}</div>
        </button>
      </li>
    </Link></>: ''
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
