import React from 'react'
import './RelatedProduct.css'
import Products from '../../Products/Products'
export default function RelatedProduct() {
  return (
    <div>
      <Products headLineBlock={false} headLine = 'Related Products'/>
    </div>
  )
}
