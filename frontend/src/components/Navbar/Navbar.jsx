import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext'
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["auth-token"]);

  const [menu,setMenu] = useState("Shop");
  const {getTotalCartItems}= useContext(ShopContext);
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} height={80} alt="" />
        <p>ZIVA COLLECTIONS</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link  style={{ textDecoration:'none' }} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none' }} to='/men'>Earings</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none' }} to='/women'>Rings</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none' }} to='/kids'>Necklace</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {cookies["auth-token"]
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");setCookies("auth-token", "");}}>Logout</button>
      :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} height={65}  alt='' /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
