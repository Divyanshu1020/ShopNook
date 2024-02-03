import React from 'react';
import { createContext, useContext, useState } from "react";
// import { useNavigate } from 'react-router-dom';




const UserContext = createContext(null)

const UserProvider=({children})=>{
    // const navigate  = useNavigate();
    const [user, setUser] = useState()

    

   const userP = user? "userIsLogedIn":"userIsNotLoggedIn"
    console.log(userP);

    return(
        <UserContext.Provider value={{user, setUser, userP}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = ()=> useContext(UserContext);

export {UserProvider, useUser}