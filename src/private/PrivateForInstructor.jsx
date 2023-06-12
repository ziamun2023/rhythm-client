
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Allusers from '../hooks/Allusers';

const PrivateForInstructor = ({children}) =>{
    const {user,loading}=useContext(AuthContext)
    const admin=Allusers()
    const access=admin[0].filter(item=>item.role==="instructor")
    const getkey=access.find(admins=>admins.email===user?.email)
    // console.log(access)
    // console.log(getkey)
// console.log(user)
    const location =useLocation()
    if(loading){
        return <p>loading</p>
    }
    if(getkey){
        return children
    }
    
}

export default PrivateForInstructor;