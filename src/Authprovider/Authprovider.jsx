import React, { createContext, useEffect, useState } from 'react';
export const Authcontext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

const Authprovider = ({children}) => {

     const [user,setuser] = useState([]);
     const [loader,setloader] = useState(true);
    
     
     
  console.log(user);
  
    const createuser = (email,password) => {
      setloader(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginuser = (email,password) => {
      setloader(true)
       return signInWithEmailAndPassword(auth,email,password)
    } 
       const logoutuser = () => {
         setloader(true)
         return signOut(auth)
       }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            setuser(currentuser);
            setloader(false);
        })
        return () => {
           unsubscribe();
        } 
    },[])


      const authinfo = {
       createuser,
       user,
       loginuser,
       logoutuser,
       loader,
       setloader
      }
    return <Authcontext value={authinfo}>
    {children}
    </Authcontext> ;
};
export default Authprovider;