
import React, { Suspense, lazy, useEffect } from 'react'
import './App.css'

//* services
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


//* Pages
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'
const ProductDetail = lazy(() => import('./Pages/ProductDetail/ProductDetail'))
const Login = lazy(() => import('./Pages/Login/Login'));
const Signup = lazy(() => import('./Pages/Signup/Signup'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));


//* Components
import Layout from './Components/Layout/Layout'

function App() {


  // useEffect(() => {
  //   // Fetch cart data from local storage


  //   // Function to update the database with cart data
  //   const updateDatabase = () => {
  //     // Your logic to update the database with cartData
  //     setTimeout(() => {
  //       console.log('Updating database with cart data:');
  //       alert('Updating database with');
  //     }, 4000);
  //   };

  //   // Attach the event listener for beforeunload
  //   const handleBeforeUnload = (event) => {
  //     updateDatabase();
  //     // Cancel the event to prevent the browser from closing immediately
  //     event.returnValue = 'cancel';
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='/login' element={<Suspense><Login /></Suspense>} />
          <Route path='/signup' element={<Suspense><Signup /></Suspense>} />
          <Route path='/*' element={<NoPage />} />
        </Routes >
      </Router>
    </div>
  )
}

export default App