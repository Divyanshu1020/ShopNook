
import React from 'react'
import './App.css'

//* services
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {UserProvider} from '../src/context/user.context.jsx'


//* Pages
import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import Category from './Pages/Category/Category'
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'
import Order from './Pages/Order/Order'
import SingleProduct from './Pages/SingleProduct/SingleProduct'

// //* Components

import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'







function App() {


  return (
    <div className="App">
      <UserProvider>
      <Router>
  

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/*' element={<NoPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes >

      </Router>
      </UserProvider>

    </div>
  )
}

export default App


{/* <Router>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/*' element={<NoPage />} />
          </Routes>
          <Footer />
        </Router> */}

{/* </div> */ }