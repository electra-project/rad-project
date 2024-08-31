import React from 'react'
import './Navbar.css'
import NavLogo from '../../assets/logo.png';
import NavProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={NavLogo} alt="logo" className="nav-logo" />
        <p className="nav-logo-name">Electra</p>
      </div>
      <img src={NavProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar;
