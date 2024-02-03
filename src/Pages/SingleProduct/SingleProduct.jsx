import React, { useEffect, useState } from 'react';
import './SingleProduct.css';
//* Components
import Layout from '../../Components/Layout/Layout';
//*services
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ProductData from '../../../data.json';


export default function SingleProduct() {
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState();
    const { id } = useParams();
    useEffect(() => {
        const src = ProductData.find(product => product.id === Number(id));
        setProduct(src)
        const formattedPrice = src.price.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        setPrice(formattedPrice)
    }, [])

    return (
        <Layout>
            <div className='singleProduct-page'>
                <div className='sp-container-main'>
                    <div className="sp-container-left">
                        <img src={`${product.thumbnail}`} alt="" />
                    </div>
                    
                    <div className="sp-container-right">
                        <div className="name">{`${product.description}`}</div>
                        <div className="price"> {`${price}`}</div>
                        
                        <div className="des">
                            {<ul>
                                {product.aboutItem?.map((line, index)=>(
                                    <li key={index}>{line}</li>
                                ))}
                            </ul>}
                            
                            
                        </div>
                        <div role='separator' className='separator'></div>
                        <div className="info-item">
                            <span className="bold">Category: <span>headphone</span></span>
                            <span className="bold">
                                Share:
                                <span className='s-icon'>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaLinkedin />
                                    <FaTwitter />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                

            </div>

            <div className="cart-button">
                            <div className="quantity-button">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className='addToCart'><FaCartPlus />  ADD TO CART</button>
                        </div>
        </Layout>
    )
}



