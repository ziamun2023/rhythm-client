import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink, Outlet } from 'react-router-dom';
import {   FaHome, FaBook, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
const InstructorDashboard = () => {
    const {logOut}=useContext(AuthContext)
    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };
  
    return (
        <div className=''>
        <div className="drawer lg:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content flex flex-col items-center justify-center">
{/* Page content here */}
<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

<Outlet/>
</div> 
<div className="drawer-side">
<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
<Fade>

<li><NavLink to="/InstructorDashboard/InstructorHome"><FaHome></FaHome> Instructor Home</NavLink></li>
                        <li><NavLink to="/InstructorDashboard/addnewclass"><AiFillEdit></AiFillEdit>Add a new class</NavLink></li>
                        <li><NavLink to="/InstructorDashboard/manageclass"><AiTwotoneSetting></AiTwotoneSetting> Manage class</NavLink></li>
                        {/* <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li> */}
                        <li><NavLink to="/InstructorDashboard/mystudents"><FaUsers></FaUsers> All Students</NavLink></li>
</Fade>
                   
                   <hr />

                   <br />
                   
                   {/* <li><NavLink to="/allclass"><FaHome></FaHome> Select class</NavLink></li> */}
                          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                          <li><NavLink ><FaHome></FaHome> <p onClick={handleLogOut}>Log out</p></NavLink></li>
                
                        {/* <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li> */}
                        {/* <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                        <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>

                        </li> */}
            
                

</ul>

</div>
</div>
    </div>
    );
};

export default InstructorDashboard;