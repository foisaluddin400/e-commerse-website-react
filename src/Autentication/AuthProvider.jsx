
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase/firebase";




export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email,password)
    }

    const googleCreateUser = () =>{
        setLoading(true)
        return signInWithPopup(Auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(Auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth, current=>{
            console.log(current)
            setUser(current)
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    })










    const AuthInfo = {user, createUser, signInUser,loading,logOut,googleCreateUser}
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;