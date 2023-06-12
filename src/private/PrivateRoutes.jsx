import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Allusers from '../hooks/Allusers';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
   
    const admin=Allusers()
    const access=admin[0].filter(item=>item.role==="instructor")
    const getkey=access.find(admins=>admins.email===user?.email)
    const admin1=Allusers()
    const access1=admin1[0].filter(item=>item.role==="admin")
    const getkey1=access1.find(admins=>admins.email===user?.email)


    const location =useLocation()
    if(getkey){
        return <p>wrong Route</p>
    }
    if(getkey1){
        return <p>wrong Route</p>
    }
    if(loading){
        return <p>loading</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/loginacc' state={{from: location}} replace></Navigate>
}

export default PrivateRoutes;