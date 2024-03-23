import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

//* Icons
import { BiCart, BiLike } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

//* Component/Pages
import Menu from './Menu/Menu';
import Search from './Search/Search';

//* context
import { useCart } from '../../context/cart.context';
import { useUser } from '../../context/user.context';
import DropBox from '../DropBox/DropBox';



export default function Navbar() {

  const [navbarScroll, setNavbarScroll] = useState(false)
  const [searchShow, setSearchShow] = useState(false);

  const { cartLength } = useCart()
  const { user } = useUser()


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
      <div className={`nav-container ${navbarScroll ? "sticky" : ''}`}>
        <nav className={`navbar `} >
          <div className="navbar-content">
            <div className="left">
              <ul className='left-link'>
                <li className='left-link-li'><Link to='/'>Home</Link></li>
                <li className='left-link-li'><Link to=' '>About</Link></li>
                <li className='left-link-li'>
                  Categories
                </li>
              </ul>
            </div>
            <div className="logo"><Link to='/'>ShopNook</Link></div>
            <div className="right">
              <ImSearch
                className='right-icon'
                onClick={() => setSearchShow(true)}
              />
              {user ?
                (<>
                  <Link className='right-link' to='/wishlist'>
                    <BiLike className='right-icon' />
                  </Link>

                  <Link className='right-link' to='/cart'>
                    <span className='cart-icon'>
                      <BiCart className='right-icon' />
                      <span>{cartLength}</span>
                    </span>
                  </Link>

                  <div className=' right-link dropdown '>
                    <FaRegUser className='right-icon user-icon ' />
                    <DropBox/>
                  </div>

                </>) :
                (
                  <>
                    <Link className=' right-link' to='/login'>Login</Link>
                    <Link className=' right-link' to='/signup'> <button className='SingUp'>SignUp</button> </Link>
                  </>
                )
              }
            </div>
          </div>
        </nav>
      </div>

      {/** Sliding Window  */}
      {searchShow && <Search setSearchShow={setSearchShow} />}
    </>
  )
}
