import React, { useEffect, useState } from 'react'
import './ProductContainer.css'
//* Components
import Loading from '../../../Components/Loading.jsx'
import Product from '../../../Components/ProductCard/Product.jsx'
import { useProductList } from '../../../context/product.context.jsx'
import useApi from '../../../hooks/useApi.jsx'
import MFilter from '../Filter/MFilter.jsx'
import NoProducts from '../../../Components/UI/NoProducts.jsx'



export default function ProductContainer() {

  const { fatchAllProducts } = useApi();
  const { productList, setProductList, setPage, page, query } = useProductList();
  const [loading, setLoading] = useState(false);

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
      setLoading(true)
      const response = await fatchAllProducts(1, {});
      console.log(response);
      if (response) {
        setProductList(response);
      }
      setLoading(false);
    }

    if (productList.length === 0) {
      fetchData();
    }
  }, [])

  return (
    <div className='products'>
      <div className="products-headline">Popular Product</div>
      <MFilter />
      <div className="products-group-conatiner">
        {loading ?
          (<Loading />)
          :
          (<div className='inside-products-group-conatiner'>
            { productList.length === 0 ? 
              (<NoProducts/>)
              :
              (<>
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
              </>)
            }
          </div>)
        }
      </div>
    </div>

  )
}
