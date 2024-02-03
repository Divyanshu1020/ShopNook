import React, { useEffect } from 'react'
import './Home.css'
//* Components
import Banner from '../../Components/Banner/Banner'
import Layout from '../../Components/Layout/Layout'
import Products from '../Products/Products'
import Category from './Category/Category'
import DFilter from './Filter/DFilter'
//* Context
// import { useUser } from '../../context/user.context'
// import { useCart } from '../../context/cart.context'
// //* Service
// import axios from 'axios'
// import GetCurrentUser from '../../helper/getCurrentUser'

export default function Home() {


  

  
  return (
    <>
    <Layout>
    <div className="home">
      <Banner />
      <div className="home-main-container">
        <Category />
        
        <div className='home-products-container'>
        
        <DFilter/>
        <Products headLineBlock={false} headLine={"Popular Product"} />
        </div>
      </div>
    </div>
  </Layout>
  </>
  )
}
