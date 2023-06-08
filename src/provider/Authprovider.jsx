import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext=createContext(null)
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const NewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logintoAccount=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(email,password)
    }
    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log('currentUser',currentUser)
        setLoading(false)
      })
      return ()=>{
        return unsubscribe
      }
 
    },[])




    const authinfo={
        user,
        loading,
        NewUser,
        logintoAccount,
        logout
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;