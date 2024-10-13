import React from "react";
import UserContext from "./User.context";

const UserProvider = ({ children }) => {
    const[user,SetUser]= React.useState(false);
    return (
        <UserContext.Provider value={{user,SetUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;