import React from 'react'
import './Navbar.css'
import logo from '../../assets/nav-logo.svg'
import nav_profile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="navbar logo" />
      <img src={nav_profile}  alt="navbar profile" className='nav-profile' />
    </div>
  )
}

export default Navbar
