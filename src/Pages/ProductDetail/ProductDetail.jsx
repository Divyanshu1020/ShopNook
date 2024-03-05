// @ts-nocheck
import React, { useEffect, useLayoutEffect, useState } from 'react';
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

import { IoAlertCircleOutline } from "react-icons/io5";
import { BsSearch } from 'react-icons/bs';
import { useUser } from '../../context/user.context.jsx';


export default function ProductDetail() {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [searching, setSearching] = useState(false)
    const [isInWishlist, setIsInWishlist] = useState()



    const { id } = useParams();

    const { updateCart } = useUpdateContext()
    const { fatchProductData, debouncedAddWishlistItem, debouncedRemoveWishlistItem } = useApi()



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
        setIsInWishlist(!isInWishlist)


        if (isInWishlist) {
            debouncedRemoveWishlistItem(id)
        } else {
            debouncedAddWishlistItem(id)
        }

    }

    //* Fatching data from backend server
    useLayoutEffect(() => {

        const fetchData = async () => {
            setSearching(true)
            const response = await fatchProductData(id);
            console.log(response);

            if (response.data) {
                setSearching(false)
                setProduct(response.data);
                setIsInWishlist(response.data.isInWishlist)
                return
            }
            if (response.error) {
                setError(true);
                return
            }
        }
        fetchData();
    }, [])


    return searching ? (
        <div className='singleProduct-page'>
            <div className='sp-container-main center' >
                {error ?
                    (<>
                        <IoAlertCircleOutline className='noNetwork' />
                        <h1>No Network</h1>
                    </>) :
                    (<BsSearch className='search' />)}
            </div>
        </div>

    ) : (
        <div className='singleProduct-page'>
            <div className='sp-container-main'>
                <div className="sp-container-left">
                    <img src={product.thumbnail} alt="" />
                </div >
                <div className="sp-container-right">
                    <div className='sp-container-right-top'>
                        <div className="name">{product.description}</div>

                        <BiLike
                            className={`sp-container-right-top-like-btn ${isInWishlist ? "like" : ""}  `}
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
            </div >
            <div className='products'>
                <div className="products-headline">Related Product</div>
                <div className="products-group-conatiner">

                </div>
            </div>

        </div >




    )
}





