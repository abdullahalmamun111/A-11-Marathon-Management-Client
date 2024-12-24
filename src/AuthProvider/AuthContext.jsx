import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';


export const contextApi = createContext();

const AuthContext = ({children}) => {
const GoogleProvider = new GoogleAuthProvider();
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const handleGoogleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,GoogleProvider)
}

const handleLogOut = () => {
    setLoading(true)
    return signOut(auth);
}


  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentuser)=> {
        setUser(currentuser)
        setLoading(false)
    });
    return () => {
        unsubsCribe();
    }
  },[])

    const authInfo = {
        createUser,
        user,
        setUser,
        handleSignIn,
        handleGoogleLogin,
        handleLogOut,
        loading
    }

    return (
        <contextApi.Provider value={authInfo}>
            {children}
        </contextApi.Provider>
    );
};

export default AuthContext;