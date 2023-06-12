import React, { useContext } from 'react';
import MyCart from '../mycartitem/MyCart';
import { Link } from 'react-router-dom';
import { NavLink,Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet,  FaHome} from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';


const StudentDashboard = () => {
  // const {logOut}=useContext(AuthContext)
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.log(error));
  // };


const IfAdminExist=true

    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet/>
  {/* <Link to='/studentDash/payment'><button className='btn bg-red-400'>pay</button></Link> */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
    

                    
                            <li><NavLink to="/studentDash/userhome"><FaHome></FaHome> User Home</NavLink></li>
                           
                            <li><NavLink to="/studentDash/mycart"><FaWallet></FaWallet> My cart</NavLink></li>
                          <div className='my-20'>
                          <hr />
                          </div>

                          <li><NavLink to="/allclass"><FaHome></FaHome> Select class</NavLink></li>
                          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                          {/* <li><NavLink ><FaHome></FaHome> <p onClick={handleLogOut}>Log out</p></NavLink></li> */}

                        
                
                    
   
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default StudentDashboard;