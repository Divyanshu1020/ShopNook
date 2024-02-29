import React from 'react';
import { createContext, useContext, useState } from "react";





const UserContext = createContext(null)

const UserProvider = ({ children }) => {

    const [user, setUser] = useState("mn")
    const userP = user ? "userIsLogedIn" : "userIsNotLoggedIn"
    console.log(userP);
    return (
        <UserContext.Provider value={{ user, setUser, userP }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);
export { UserProvider, useUser }