import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

//* Icons
import { BiCart, BiLike } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

//* Component/Pages
import Search from './Search/Search';
import Menu from './Menu/Menu';

//* context
import { useCart } from '../../context/cart.context';
import { useUser } from '../../context/user.context';



export default function Navbar() {

  const [navbarScroll, setNavbarScroll] = useState(false)
  const [searchShow, setSearchShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false)

  const { cart } = useCart()
  const { user } = useUser()

  const navigate = useNavigate();

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
                <li className='left-link-li' onClick={() => navigation()}>About</li>
                <li className='left-link-li dropdown'>
                  Categories
                  <div className="dropdown-content" >

                    <Link to='/category/Bluetooth Speaker' >
                      Bluetooth Speaker
                    </Link>
                    <Link to='/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to='/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to='/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to='/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to='/category' >
                      Bluetooth Speaker
                    </Link>

                  </div>
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
                  <BiLike className='right-icon' />
                  <span className='cart-icon' onClick={() => navigate('/cart')}>
                    <BiCart className='right-icon' />
                    <span>{cart.length}</span>
                  </span>
                  <FaRegUser className='right-icon user-icon'
                    onClick={() => setMenuShow(true)}
                  />



                </>) :
                (
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'> <button className='SingUp'>SignUp</button> </Link>
                  </>
                )
              }
            </div>
          </div>
        </nav>
      </div>


      {searchShow && <Search setSearchShow={setSearchShow} />}

      {menuShow && <Menu setMenuShow={setMenuShow} />}


    </>
  )
}
