import React from 'react'
import './Category.css'
// @ts-ignore
import src from '../../../assets/category/cat-1.jpg'
export default function Category() {
  return (
    <div className='category' id='Catagories'>
      <div className="category-items">
        <div className="category-item">
          <img src={src} alt="" />
        </div>
        <div className="category-item">
          <img src={src} alt="" />
        </div>
        <div className="category-item">
          <img src={src} alt="" />
        </div>
        <div className="category-item">
          <img src={src} alt="" />
        </div>
      </div>
    </div>
  )
}
