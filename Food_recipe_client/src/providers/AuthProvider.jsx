
// eslint-disable-next-line no-unused-vars
import {GithubAuthProvider,GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
// eslint-disable-next-line no-unused-vars
import React,{ createContext, useEffect, useState }  from 'react';


export const authContext = createContext(null);
const auth =getAuth(app)

const provider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [loader,setLoader]=useState(true);
    
    const [user, setUser] = useState(null)
    const loginUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle=()=>{
        return signInWithPopup(auth, provider);
    }
    const signInGithub=()=>{
        return signInWithPopup(auth, gitProvider);
    }
    const SignOut=()=>{
        return signOut(auth);

    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                setLoader(false)
            }
            else{
                setUser(null);
                setLoader(false)
            }

        });
        return ()=>unsubscribe();

    },[user])
    

    const authInfo={
        user,
        loader,
        loginUser,
        signIn,
        signInGoogle,
        signInGithub,
        SignOut
    }

  return (
    <authContext.Provider value={authInfo}>
        {children}
        </authContext.Provider>
  )
}

export default AuthProvider