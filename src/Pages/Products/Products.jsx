import React from 'react'
import './Products.css'
import Product from './Product/Product'
export default function Products({headLineBlock, headLine}) {
  return (
    <div className='products'>
        {!headLineBlock && <div className="products-headline">{headLine}</div>}
        <div className="products-group">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}
