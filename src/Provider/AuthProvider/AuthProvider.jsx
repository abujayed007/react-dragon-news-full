import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth) 
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser);
        })
        return unSubscribe;
    },[])


    const authInfo = {
        loading,
        user,
        createUser,
        userLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;