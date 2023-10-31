import React from 'react';
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import src from '../../assets/products/watch-prod-1.webp';
import './SingleProduct.css';
import RelatedProduct from './RelatedProduct/RelatedProduct';


export default function SingleProduct() {
    return (
        <div className='singleProduct-page'>
            <div className="sp-container">
                <div className='sp-container-main'>
                    <div className="sp-container-left">
                        <img src={src} alt="" />
                    </div>
                    <div className="sp-container-right">
                        <div className="name">Headphone</div>
                        <div className="price">&#8377; 9500</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas distinctio quos reiciendis impedit accusantium molestias ad fuga cum dolores qui! Dolore rem delectus optio ex facere aperiam magni nulla! Quis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, saepe earum. Repellendus, eos. Ipsum ut doloremque molestiae eaque perferendis vero sint consectetur officia hic autem possimus saepesectetur adipisicing elit. Excepturi rem accusamus dolor voluptatum voluptas laudantium ut in, amet sed consequuntur facilis aut perferendis eius possimus. Iste autem totates deleniti et debitis unde? Quae dolorem exercitationem vitae voluptatibus. </div>
                        <div className="cart-button">
                            <div className="quantity-button">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className='addToCart'><FaCartPlus />  ADD TO CART</button>
                        </div>
                        <span className="divider"></span>
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
                <div className="sp-container-bottom">
                    <RelatedProduct/>
                </div>
            </div>
        </div>
    )
}



