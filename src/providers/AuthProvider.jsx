import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    // create user function
    const createUser = (email, password)=>{
        setloading(false)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    // signIn user function

    const signIn = (email, password)=>{
        setloading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logout function

    const logOut = () =>{
        setloading(false) 
        return signOut(auth)
    }

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log("currentUser", currentUser)
            setloading(false)
        })
        return()=>{
            return unsbscribe;
        }
    },[])
   

    const infoData = {
      user,
      loading,
      createUser,
      signIn,
      logOut

    }
  return (
    <AuthContext.Provider value={infoData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;