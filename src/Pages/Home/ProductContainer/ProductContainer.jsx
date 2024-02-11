import React from 'react'
import './ProductContainer.css'
//* Components
import ProductData from '../../../../data.json'
import Product from '../../../Components/ProductCard/Product.jsx'
import MFilter from '../Filter/MFilter.jsx'



export default function ProductContainer() {


  return (
    <div className='products'>
      <div className="products-headline">Popular Product</div>
      <MFilter />
      <div className="products-group-conatiner">
        <div className="products-group">
          {ProductData.map((product) => (
            <Product
              key={product.id}
              id={product.id}
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
