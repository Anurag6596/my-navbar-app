// src/components/Navbar.jsx
// import React from 'react';
import { FaSearch, FaBell, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import { GrStarOutline } from "react-icons/gr";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import logo from '../assets/logo.svg'
import "@fontsource/poppins";
import './Navbar.css';

const Navbar = () => {
  return (
   <div className="navbar-1">
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search here..." style={{fontFamily:'poppins'}}/>
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="navbar-links">
      <MdExplore />
        <a href="#">Explore</a>
        <GrStarOutline />
        <a href="#">Hobbies</a>
      </div>
      <div className="navbar-icons">
        <FaBookmark style={{}} />
        <FaBell />
        <FaShoppingCart />
        <button className="sign-in-btn">
          <FaSignInAlt /> Sign In
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
