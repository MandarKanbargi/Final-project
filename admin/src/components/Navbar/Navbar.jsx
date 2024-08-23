import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo_big.png'
import navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo}  height={90} alt="" classname="logo" />
      <p>ZIVA COLLECTIONS</p>
      <img src={navprofile} alt=""  className='nav-profile'/>

    </div>
  )
}

export default Navbar
