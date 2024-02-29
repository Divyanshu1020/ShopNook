import axios from 'axios';
import React, { useEffect, useState } from 'react';
import App from '../App';
import { useCart } from '../context/cart.context';
import { useUser } from '../context/user.context';
import Loading from '../Components/Loading';

export default function GetCurrentUser() {
    const { user, setUser } = useUser();
    const { setCartLength } = useCart();
    const [loading, setLoading] = useState(true);

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
                console.error("Error fetching current user:", err);
            } finally {
                setLoading(false);
            }
        };


        fetchCurrentUser();

    }, []);

    return loading ? <Loading /> : <App />;
}
