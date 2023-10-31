
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'
import Order from './Pages/Order/Order'
import { MyState } from './context/data/myState'
import Footer from './Components/Footer/Footer'
import NewsLetter from './Components/Footer/NewsLetter/NewsLetter'
import Category from './Pages/Category/Category'
import SingleProduct from './Pages/SingleProduct/SingleProduct'




function App() {


  return (
    <div className="App">
      <MyState>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/category' element={<Category/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/*' element={<NoPage />} />
          </Routes>
          <Footer/>
        </Router>
      </MyState>
    </div>
  )
}

export default App
