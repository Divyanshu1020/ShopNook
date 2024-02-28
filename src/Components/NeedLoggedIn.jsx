import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUser } from '../context/user.context';

export default function NeedLoggedIn({children}) {
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
      
        if(!user){
            navigate('/login', {replace : true});
        }
      
    }, [navigate, user])
    
  return children
}
