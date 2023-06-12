import React, { useContext } from 'react';
import MyCart from '../mycartitem/MyCart';
import { Link } from 'react-router-dom';
import { NavLink,Outlet } from 'react-router-dom';
import {  FaWallet, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../../providers/AuthProvider';


const Dashboard = () => {

  // const {logOut}=useContext(AuthContext)
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.log(error));
  // };



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

    <li><NavLink to="/Admindashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            
                            <li><NavLink to="/Admindashboard/totalclassmanagement"><FaWallet></FaWallet> Manage Class</NavLink></li>
                          
                            <li><NavLink to="/Admindashboard/allProfile"><FaUsers></FaUsers> All Users</NavLink></li>
    </Fade>

    <hr />
    <br />
    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                          {/* <li><NavLink ><FaHome></FaHome> <p onClick={handleLogOut}>Log out</p></NavLink></li> */}
                       
                    
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

export default Dashboard;