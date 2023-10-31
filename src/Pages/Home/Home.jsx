import React from 'react'
import Banner from '../../Components/Banner/Banner'

import './Home.css'
import Category from './Category/Category'
import Products from '../Products/Products'


export default function Home() {
  return (


    <div className="home">
      <Banner />
      <div className="home-main-container">
        <Category />
        <Products headLineBlock={false} headLine={"Popular Product"}/>
      </div>
    </div>

  )
}
