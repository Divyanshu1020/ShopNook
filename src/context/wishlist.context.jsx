import React, { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext(null);

const WishlistProvider = ({children}) => {

    const [wishlist, setWishlist] = useState([]);
    const [wishlistUpdate, setWishlistUpdate] = useState()

    useEffect(() => {
        const timeout = setTimeout( ()=>{
            if(wishlistUpdate) console.log("api call", wishlistUpdate);
        },1000)
        return ()=> clearTimeout(timeout);

    }, [wishlistUpdate])

    return (
        <WishlistContext.Provider value={{wishlist, setWishlist, setWishlistUpdate}}>
            {children}
        </WishlistContext.Provider>  
    )
}

const useWishlist = () => useContext(WishlistContext)
export {WishlistProvider, useWishlist}