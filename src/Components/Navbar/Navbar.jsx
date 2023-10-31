import React, { useEffect, useState } from 'react';
import { BiCart, BiLike } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import Cart from '../../Pages/Cart/Cart';
import './Navbar.css';

export default function Navbar() {
  const [navbarScroll, setNavbarScroll] = useState(false)
  const [cartShow , setCartShow] = useState(false)

  
  const navbarScrollHandler = () => {
    const offset = window.scrollY;
    if (offset > 200) setNavbarScroll(true)
    else setNavbarScroll(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', navbarScrollHandler)
  }, [])

  return (
    <>
      
      <nav className={`navbar ${navbarScroll ? "sticky" : ''}`} >
        <div className="navbar-content">
          <div className="left">
            <ul className='left-link'>
              <li className='left-link-li'><Link to='/'>Home</Link></li>
              <li className='left-link-li'>About</li>
              <li className='left-link-li'><a href="#Catagories"> Catagories</a></li>
            </ul>
          </div>
          <div className="logo">ShopNook</div>
          <div className="right">
            <ImSearch className='right-icon' />
            <BiLike className='right-icon' />
            <span className='cart-icon' onClick={()=>setCartShow(true)}>
              <BiCart className='right-icon' />
              <span>5</span>
            </span>

          </div>
        </div>
      </nav>
       { cartShow && <Cart setCartShow = {setCartShow} />}
    </>
  )
}
