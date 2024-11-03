import React, { useEffect } from "react";
import axios from 'axios';
import UserContext from "./User.context";
const UserProvider = ({ children }) => {
    const[login,setLogin]= React.useState(true);   
    const[Admin,SetAdmin]=React.useState(true);
    // useEffect(()=>{
        // const user= Cookies.get("uid");
    //     const user= axios.get('http://localhost:8000').then((res)=>{return res})
    //     if(user){
    //         setLogin(user.data);
    //     }
    //     console.log("value from axios is ",user.data);
        
    // },[window.location.pathname])
    return (
        <UserContext.Provider value={{login,setLogin,Admin,SetAdmin}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;