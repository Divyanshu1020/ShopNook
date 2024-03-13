import React from 'react'
import './Home.css'
//* Components
import Banner from '../../Components/Banner/Banner'
// import Category from './Category/Category'
import { ProductProvider } from '../../context/product.context'
import DFilter from './Filter/DFilter'
import ProductContainer from './ProductContainer/ProductContainer'


export default function Home() {

  return (

    <div className="home">
      <Banner />
      <div className="home-main-container">
        {/* <Category /> */}
          <div className='home-products-container'>
            <DFilter />
            <ProductContainer />
          </div>
      </div>
    </div>

  )
}
