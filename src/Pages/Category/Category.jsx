import React from 'react'
import './Category.css'
import Products from '../Products/Products'
import Layout from '../../Components/Layout/Layout'

export default function Category() {
  return (
    <Layout>
      <div className='page-category'>
        <div className="page-header">
            Headphone
        </div>
        <div className="page-category-container">
            <Products headLineBlock={true} headLine={undefined}/>
        </div>
    </div>
    </Layout>
  )
}
