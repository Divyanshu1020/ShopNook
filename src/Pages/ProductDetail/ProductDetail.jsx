import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
//* Icons 
import { BiLike } from 'react-icons/bi';
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { useParams } from 'react-router-dom';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat.js'
import ProductData from '../../../data.json';
import { useCart } from '../../context/cart.context.jsx';




export default function ProductDetail() {
    const { cart, setCart } = useCart();
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState();
    const { id } = useParams();


    const addToCart = () => {
        const newItem = {
            id,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: 1,
            thumbnail: product.thumbnail,
        }
        const existingProduct = cart.find(product => (product?.id === id));

        if (existingProduct) {
            setCart(preProducts => (
                preProducts.map(
                    item => (
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                )
            ))
        } else {
            setCart(preProducts => ([...preProducts, newItem]))

        }

    }

    useEffect(() => {
        window.scrollTo(0, 0,);
        const src = ProductData.find(product => product.id === Number(id));
        const formattedPrice = convertInPricrFormate(src?.price);
        setProduct(src);
        setPrice(formattedPrice);

    }, [id])

    return (

        <div className='singleProduct-page'>
            <div className='sp-container-main'>
                <div className="sp-container-left">
                    <img src={`${product.thumbnail}`} alt="" />
                </div>
                <div className="sp-container-right">
                    <div className='sp-container-right-top'>

                        <div className="name">{`${product.description}`}</div>
                        <BiLike className={`sp-container-right-top-like-btn `} />
                    </div>
                    <div className="price"> {`${price}`}</div>
                    <div className="des">
                        {<ul>
                            {product.aboutItem?.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>}
                    </div>
                    <div role='separator' className='separator'></div>
                    <div className="bottom">
                        <div className='bottom-left'>
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
                        <div className="bottom-right">
                            <button className='Buy-Now'>Buy Now</button>
                            <button
                                className='cart'
                                onClick={() => { addToCart() }}
                            >
                                <FaCartPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='products'>
                <div className="products-headline">Related Product</div>
                <div className="products-group-conatiner">

                </div>
            </div>
        </div>




    )
}





