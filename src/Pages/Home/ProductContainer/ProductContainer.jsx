import React, { useState } from 'react'
import './ProductContainer.css'
//* Components
// import ProductData from '../../../../data.json'
import { useEffect } from 'react'
import Product from '../../../Components/ProductCard/Product.jsx'
import useApi from '../../../util/useApi.jsx'
import MFilter from '../Filter/MFilter.jsx'



export default function ProductContainer() {

  const [productData, setProductData] = useState([])
  const { fatchAllProducts } = useApi();
  useEffect(() => {

    const fetchData = async () => {
      const response = await fatchAllProducts();
      console.log(response);
      if (response) {
        setProductData(response);
      }
    }

    fetchData();
  },[])
  
  return (
    <div className='products'>
      <div className="products-headline">Popular Product</div>
      <MFilter />
      <div className="products-group-conatiner">
        <div className="products-group">
          {productData.map((product) => (
            <Product
              key={product._id}
              id={product._id}
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
