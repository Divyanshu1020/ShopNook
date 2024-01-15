import React from 'react'
import Product from './Product/Product'
import './Products.css'
import MFilter from '../Home/Filter/MFilter'
export default function Products({ headLineBlock, headLine }) {
  return (
    <div className='products'>
      {!headLineBlock && <div className="products-headline">{headLine}</div>}
      <MFilter/>
      <div className="products-group-conatiner">

        <div className="products-group">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          
        </div>
        <div className="loadmore">

      loadmore...
      </div>
      </div>
      
    </div>

  )
}
