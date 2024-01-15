import React from 'react';
import { createContext, useContext, useState } from "react";




const UserContext = createContext(null)

const UserProvider=({children})=>{
    const [user, setUser] = useState({
        user : {},
        JWT :''
    })

    return(
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = ()=> useContext(UserContext);

export {UserProvider, useUser}