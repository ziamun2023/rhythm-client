import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
 const {user,logOut}=useContext(AuthContext)

 const handleLogOut = () => {
  logOut()
      .then(() => { })
      .catch(error => console.log(error));
}

    return (
        <div className="navbar nav">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Instructors</a></li>
              <li><a>Classes</a></li>
              <li><a>Dashboard</a></li>
            
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
     
            <li><a>Home</a></li>
              <li><a>Instructors</a></li>
              <li><a>Classes</a></li>
              <li><a>Dashboard</a></li>
            
     
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?  <a onClick={handleLogOut} className="btn">Log out</a>:  <a className="btn">sign up</a>

          }
        
        </div>
      </div>
    );
};

export default Navbar;