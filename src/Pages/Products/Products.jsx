import React from 'react'
import './Products.css'
//* Components
import Product from './Product/Product'
import MFilter from '../Home/Filter/MFilter'
// context
import { useCart } from '../../context/cart.context.jsx'
import ProductData from '../../../data.json'
import { useUser } from '../../context/user.context.jsx'



export default function Products({ headLineBlock, headLine }) {

  
  return (
    <div className='products'>
      {!headLineBlock && <div className="products-headline">{headLine}</div>}
      <MFilter/>
      <div className="products-group-conatiner">

        <div className="products-group">
          {ProductData.map((product)=>(
            <Product 
              key={product.id}
              id ={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail} />
          
          ))}
              
            
            
          
          
        </div>
        <div className="loadmore">

      loadmore...
      </div>
      </div>
      
    </div>

  )
}
