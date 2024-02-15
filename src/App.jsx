
import React, { Suspense, lazy, useEffect } from 'react'
import './App.css'

//* services
import { Route, BrowserRouter as Router, Routes, ScrollRestoration } from 'react-router-dom'


//* Pages
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'
const ProductDetail = lazy(() => import('./Pages/ProductDetail/ProductDetail'))
const Login = lazy(() => import('./Pages/Login/Login'));
const Signup = lazy(() => import('./Pages/Signup/Signup'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));


//* Components
import Layout from './Components/Layout/Layout'
import ScrollToTop from './helper/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='/login' element={<Suspense><Login /></Suspense>} />
          <Route path='/signup' element={<Suspense><Signup /></Suspense>} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App