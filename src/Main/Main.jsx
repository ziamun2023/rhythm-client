import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {
    const {isDarkMode}=useContext(AuthContext)
    return (
        <div className={isDarkMode?'bg-black area duration-500':"duration-500 bg-white"}>


 <Navbar/>
        
        <Outlet/>
        <Footer/>
 
  

        
        </div>
    );
};

export default Main;