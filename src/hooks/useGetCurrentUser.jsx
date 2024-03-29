import axios from 'axios';
import React, { useEffect } from 'react';
import { useCart } from '../context/cart.context';
import { useUser } from '../context/user.context';

export default function useGetCurrentUser() {
    const { user, setUser } = useUser();
    const { setCartLength } = useCart();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                if(!user || user === null){
                    const response = await axios.get("http://localhost:8000/api/v1/users/current-user", { withCredentials: true });
                    setUser(response.data.user);
                    setCartLength(response.data.user.cart.length);
                    console.log('Api call fetchCurrentUser '); 
                }
            } catch (err) {
                console.warn("Error fetching current user:", err);
            }
        };  


        fetchCurrentUser();

    }, []);
}
