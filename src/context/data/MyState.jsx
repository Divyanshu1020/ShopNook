
import React, { createContext } from 'react'

const MyContext = createContext(null);
export const MyState = (props)=>{
    const randome = "sthibf"

    return (
       <MyContext.Provider value={randome}>
            {props.children}
       </MyContext.Provider> 
    )
}