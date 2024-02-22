import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
//* Icons 
import { BiLike } from 'react-icons/bi';
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { useParams } from 'react-router-dom';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat.js'
// import ProductData from '../../../data.json';
import { useCart } from '../../context/cart.context.jsx';
import { useWishlist } from '../../context/wishlist.context.jsx';
import axios from 'axios';




export default function ProductDetail() {
    const [product, setProduct] = useState({})
    // const [price, setPrice] = useState();
    // const [actualPrice, setactualPrice] = useState();
    const [index, setIndex] = useState(0);

    //* Context
    const { cart, setCart } = useCart();
    const { wishlist, setWishlist } = useWishlist();

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

    const addToWishlist = () => {
        const newItem = {
            id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
        }



        if (index >= 0) {
            const updateWishlist = [...wishlist];
            updateWishlist.splice(index, 1);
            setWishlist(updateWishlist);

        } else {
            setWishlist(preProducts => ([...preProducts, newItem]))
        }
    }
    //* Fatching data from backend server
    const fatchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/products/${id}`)
            console.log("Response from product API", response.data.data);
            setProduct(response.data.data)
            console.log(product);
        } catch (error) {
            console.log("Error is produced when fetching product", error);
        }
    }


    useEffect(() => {
        // Call to server product based on id
        fatchProductData()

        const index = wishlist.findIndex(product => (product?.id === id));
        setIndex(index)


    }, [id, wishlist,])

    return (

        <div className='singleProduct-page'>
            <div className='sp-container-main'>
                <div className="sp-container-left">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="sp-container-right">
                    <div className='sp-container-right-top'>
                        <div className="name">{product.description}</div>

                        <BiLike
                            className={`sp-container-right-top-like-btn ${index >= 0 ? "like" : ""} `}
                            onClick={() => { addToWishlist() }}
                        />
                    </div>
                    <div className='prices'>
                        <div className="price"> {convertInPricrFormate(Number(product.price))}</div>
                        <div className="actual price"> {convertInPricrFormate(Number(product.actualPrice))}</div>
                    </div>
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
                            <span className="bold">Capacity: <span>{product.Capacity}</span></span>
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





