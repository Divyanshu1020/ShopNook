import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/cart.context.jsx'
import { UserProvider } from './context/user.context.jsx'
import './index.css'
import { ProductProvider } from './context/product.context.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </ProductProvider>
  </UserProvider>

)
