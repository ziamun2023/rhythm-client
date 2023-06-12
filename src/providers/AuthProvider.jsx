import React from 'react';
import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';
// import { IsAdmin } from '../hooks/IsAdmin';
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [admin,setAdmin]=useState([])
    const [adminHere,setAdminhere]=useState(null)

    // const [day,setDay]=useState(false)
    const admins  =admin.filter(item=>item.role==='admin')
    const instructors  =admin.filter(item=>item.role==='instructor')
    console.log(instructors)
    //   console.log(admins)
      const [isDarkMode, setIsDarkMode] = useState(false)
    //   if(isDarkMode){
    //     setDay(true)
    //   }
    //   else{
    //     setDay(false)
    //   }

    

    useEffect(()=>{
        fetch('https://music-server-psi.vercel.app/studentProfile')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateStudentProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
const google =new GoogleAuthProvider()
const googleSignin=()=>{
    setLoading(true)
    return signInWithPopup(auth,google)
}



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false)

        // get and set token
     

        
    });
    return () => {
        return unsubscribe();
    }
}, [])



// useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//         setUser(currentUser);
       
//         console.log('current user', currentUser);


//         setLoading(false);
//     });
//     return () => {
//         return unsubscribe();
//     }
// }, [])
  

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateStudentProfile,
        logOut,
        googleSignin,
        admins,
        adminHere,
        setAdminhere,
        setIsDarkMode,
        isDarkMode,
        instructors
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;