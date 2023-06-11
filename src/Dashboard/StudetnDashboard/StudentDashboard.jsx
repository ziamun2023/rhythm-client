import React, { useContext } from 'react';
import MyCart from '../mycartitem/MyCart';
import { Link } from 'react-router-dom';
import { NavLink,Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';


const StudentDashboard = () => {


const IfAdminExist=true

    return (
        <div>
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
    
{/*                        
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/dashboard/allProfile"><FaUsers></FaUsers> All Users</NavLink></li> */}
                    
                            <li><NavLink to="/studentDash/userhome"><FaHome></FaHome> User Home</NavLink></li>
                           
                            <li><NavLink to="/studentDash/mycart"><FaWallet></FaWallet> My cart</NavLink></li>
                        
                
                    
   
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default StudentDashboard;