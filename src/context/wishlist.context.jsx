import React, { createContext, useContext, useState } from 'react'

const WishlistContext = createContext(null);

const WishlistProvider = ({children}) => {

    const [wishlist, setWishlist] = useState([]);

    return (
        <WishlistContext.Provider value={{wishlist, setWishlist}}>
            {children}
        </WishlistContext.Provider>  
    )
}

const useWishlist = () => useContext(WishlistContext)
export {WishlistProvider, useWishlist}