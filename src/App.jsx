
import React from 'react'
import './App.css'

//* services
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


//* Pages
// import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'
import SingleProduct from './Pages/SingleProduct/SingleProduct'

 //* Components
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/*' element={<NoPage />} />
        </Routes >
      </Router>
    </div>
  )
}

export default App