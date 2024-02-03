import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/cart.context.jsx'
import { UserProvider } from './context/user.context.jsx'
import './index.css'
import GetCurrentUser from './helper/getCurrentUser.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
      <GetCurrentUser/>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)
