import React from 'react'
import Banner from '../../Components/Banner/Banner'

import Layout from '../../Components/Layout/Layout'
import Products from '../Products/Products'
import Category from './Category/Category'
import './Home.css'


export default function Home() {
  return (


    <Layout>
      <div className="home">
        <Banner />
        <div className="home-main-container">
          <Category />
          <Products headLineBlock={false} headLine={"Popular Product"} />
        </div>
      </div>
    </Layout>

  )
}
