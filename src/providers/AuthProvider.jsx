import React from 'react';
import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


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
    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser)
              setLoading(false)
  
          })
          return ()=>{
              return unsubscribe()
          }
       },[])
  

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateStudentProfile,
        logOut,
        googleSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;