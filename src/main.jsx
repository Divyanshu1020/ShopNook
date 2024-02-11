import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/cart.context.jsx'
import { UserProvider } from './context/user.context.jsx'
import GetCurrentUser from './helper/getCurrentUser.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <CartProvider>
      <GetCurrentUser />
    </CartProvider>
  </UserProvider>

)
