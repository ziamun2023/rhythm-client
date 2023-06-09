import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    if(loading){
        return <p>loading</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/loginacc' state={{from: location}} replace></Navigate>
}

export default PrivateRoutes;