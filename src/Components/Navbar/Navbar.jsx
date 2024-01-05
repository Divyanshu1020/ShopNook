import React, { useEffect,  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

//* Icons
import { BiCart, BiLike } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineQueueList } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";

//* Component/Pages
import Cart from '../../Pages/Cart/Cart';
import Search from '../../Pages/Search/Search';
import Menu from './Menu/Menu';


export default function Navbar() {

  const [navbarScroll, setNavbarScroll] = useState(false)
  const [cartShow,     setCartShow] = useState(false)
  const [searchShow, setSearchShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false)
  
  const navigat = useNavigate();

  const navbarScrollHandler = () => {
    const offset = window.scrollY;
    if (offset > 200) setNavbarScroll(true)
    else setNavbarScroll(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', navbarScrollHandler)
  }, [])

 const navigation =()=>{
  navigat('/category')
}

  return (
    <>
      <nav className={`navbar ${navbarScroll ? "sticky" : ''}`} >
        <div className="navbar-content">
          <div className="left">
            <ul className='left-link'>
              <li className='left-link-li'><Link to='/'>Home</Link></li>
              <li className='left-link-li' onClick={()=> navigation()}>About</li>
              <li className='left-link-li dropdown'>
              Categories
                  <div className="dropdown-content" >
                  
                    <Link to= '/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to= '/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to= '/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to= '/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to= '/category' >
                      Bluetooth Speaker
                    </Link>
                    <Link to= '/category' >
                      Bluetooth Speaker
                    </Link>
                    
                  </div>
              </li>
            </ul>
          </div>
          <div className="logo">ShopNook</div>
          <div className="right">
            <ImSearch className='right-icon' onClick={() => setSearchShow(true)} />
            <BiLike className='right-icon' />
            <span className='cart-icon' onClick={() => setCartShow(true)}>
              <BiCart className='right-icon' />
              <span>5</span>
            </span>
            <FaRegUser className='right-icon' />
            <HiOutlineQueueList className='right-icon' onClick={() => setMenuShow(true)} />

          </div>
        </div>
      </nav>

      {cartShow && <Cart setCartShow={setCartShow} />}

      {searchShow && <Search setSearchShow={setSearchShow} />}

      {menuShow && <Menu setMenuShow={setMenuShow} />}


    </>
  )
}
