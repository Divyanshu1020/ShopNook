import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/cart.context.jsx'
import { UserProvider } from './context/user.context.jsx'
import GetCurrentUser from './helper/getCurrentUser.jsx'
import './index.css'
import { ProductProvider } from './context/product.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <GetCurrentUser />
      </CartProvider>
    </ProductProvider>
  </UserProvider>

)
