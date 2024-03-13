import React, { useState } from 'react'
import './ProductContainer.css'
//* Components
import { useEffect } from 'react'
import Product from '../../../Components/ProductCard/Product.jsx'
import { useProductList } from '../../../context/product.context.jsx'
import useApi from '../../../util/useApi.jsx'
import MFilter from '../Filter/MFilter.jsx'



export default function ProductContainer() {

  const { productList, setProductList, setPage, page, query } = useProductList();
  const { fatchAllProducts } = useApi();

  //* Fatch more products
  const loadmoreProductsHandler = async () => {
    setPage(pre => pre + 1);
    const response = await fatchAllProducts(page + 1, query);
    console.log(response);
    if (response) {
      setProductList((prevList) => [...prevList, ...response]);
    }
  }
  //* Fatching products
  useEffect(() => {

    const fetchData = async () => {
      const response = await fatchAllProducts(1, {});
      console.log(response);
      if (response) {
        setProductList(response);
      }
    }
    if(productList.length === 0) {
      fetchData();
    }
  }, [])

  return (
    <div className='products'>
      <div className="products-headline">Popular Product</div>
      <MFilter />
      <div className="products-group-conatiner">
        <div className="products-group">
          {productList.map((product) => (
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
          <button className='loadmore-btn' onClick={() => { loadmoreProductsHandler() }}>Loadmore</button>
          <div className='separator'></div>
        </div>
      </div>
    </div>

  )
}
