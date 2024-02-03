import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/user.context';
import { useCart } from '../context/cart.context';
import App from '../App';

export default function GetCurrentUser() {
    const { user, setUser } = useUser();
    const { setCart } = useCart();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                if (!user) {
                    const response = await axios.get("http://localhost:8000/api/v1/users/current-user", { withCredentials: true });
                    setUser(response.data.user);
                    setCart(response.data.user.cart);
                    console.log(response.data);
                }
            } catch (err) {
                console.error("Error fetching current user:", err);
                // Handle the error, e.g., show an error message to the user
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, []);

    return loading ? <p>Loading...</p> : <App/>;
}
