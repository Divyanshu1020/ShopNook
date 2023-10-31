import React from 'react'
import './Category.css'
import Products from '../Products/Products'

export default function Category() {
  return (
    <div className='page-category'>
        <div className="page-header">
            Headphone
        </div>
        <div className="page-category-container">
            <Products headLineBlock={true}/>
        </div>
    </div>
  )
}
