import React, { useEffect } from "react";
import UserContext from "./User.context";
import Cookies from 'js-cookie';
const UserProvider = ({ children }) => {
    const[login,SetLogin]= React.useState(true);
    const[Admin,SetAdmin]=React.useState(false);
    const user= Cookies.get("uid");
    useEffect(()=>{
        // const user= Cookies.get("uid");
        if(user){
            SetLogin(!login);
        }
        console.log(user);
        
    },[])
    return (
        <UserContext.Provider value={{login,SetLogin,Admin,SetAdmin}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;