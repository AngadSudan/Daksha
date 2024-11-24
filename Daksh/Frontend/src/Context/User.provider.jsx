import React, { useEffect } from "react";
import axios from 'axios';
import UserContext from "./User.context";
import configure from "../Conf/configure";
const UserProvider = ({ children }) => {
    const[login,setLogin]= React.useState('');   
    const[Admin,SetAdmin]=React.useState('');
    const dataupdation= async()=>{
        const isSignnedin=localStorage.getItem('sessionID');
        if(!isSignnedin){
            setLogin(false);
        }else{
            setLogin(true);
        }

        const isAdmin=localStorage.getItem('adminID');
        console.log('isAdmin',isAdmin);
        if(!isAdmin){
            SetAdmin(false);
        }else{
            SetAdmin(true);
        }
    }
    useEffect(()=>{
        dataupdation();
        if(localStorage.getItem('sessionId')!==null){
            setLogin(true);
        }
        if(localStorage.getItem('admin')!==null){
            setLogin(true);
        }
    },[window.location.pathname])
    return (
        <UserContext.Provider value={{login,setLogin,Admin,SetAdmin}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;