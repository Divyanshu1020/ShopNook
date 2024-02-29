// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
//* Icons 
import { BiLike } from 'react-icons/bi';
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useWishlist } from '../../context/wishlist.context.jsx';
//* Helper functions
import { useParams } from 'react-router-dom';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat.js';
import useApi from '../../util/useApi.jsx';
import useUpdateContext from '../../util/useUpdateContext.jsx';




export default function ProductDetail() {
    const [product, setProduct] = useState({})
    //* Context

    const { wishlist, setWishlist, setWishlistUpdate } = useWishlist();

    const { id } = useParams();

    const { updateCart } = useUpdateContext()
    const { fatchProductData } = useApi()
    const index = wishlist.findIndex(product => (product?.id === id));

    const addToCart = () => {
        const newItem = {
            productId: id,
            productQuantity: 1,
            productDetails: {
                description: product.description,
                price: product.price,
                actualPrice: product.actualPrice,
                thumbnail: product.thumbnail,
            },
        }
        updateCart(newItem)
    }

    const addToWishlist = () => {

        const newItem = {
            _id: id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
        }

        if (index >= 0) {
            const updateWishlist = [...wishlist];
            updateWishlist.splice(index, 1);
            setWishlist(updateWishlist);
            // Todo:- make api call to remove product from whish list in database
            setWishlistUpdate("remove", id)

        } else {
            setWishlist(preProducts => ([...preProducts, newItem]))
            // Todo make api call to add product from whish list in database
            setWishlistUpdate("add", id)
        }
    }

    //* Fatching data from backend server
    useEffect(() => {

        const fetchData = async () => {

            const response = await fatchProductData(id);
            console.log(response);
            if (response) {
                setProduct(response); // Set the product if response is not null
            }
        }

        fetchData();
    }, [fatchProductData, id])

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





