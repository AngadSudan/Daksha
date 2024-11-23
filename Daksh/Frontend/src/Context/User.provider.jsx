import React, { useEffect } from "react";
import axios from 'axios';
import UserContext from "./User.context";
import configure from "../Conf/configure";
const UserProvider = ({ children }) => {
    const[login,setLogin]= React.useState('');   
    const[Admin,SetAdmin]=React.useState(true);
    const dataupdation= async()=>{
        const user=await axios.get(`${configure.Endpoint}`);
        console.log(user);
        if(user){
            localStorage.setItem('sessionId',user.data);
            localStorage.setItem('admin',user.data)
        }else{
            localStorage.setItem('sessionId',null);
            localStorage.setItem('admin',null);
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