import React from 'react';
import './header.component.css'

const Header = () => {
  return (
    <header id="header">
        <img id="logopic" className="logo" alt="Buns and Burger Logo" />
        <h1>Buns and Burgers</h1>
        <div className="cart_icon">
            <a href="Cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
        <nav id="navbar">
        <a className="home" href="index.html">Home</a>
        <a className="menu" href="menu.html">Menu</a>
        <a className="deals" href="deals.html">Hot Deals</a>
        <a className="about" href="about.html">About Us</a>
        </nav>
       </header>
  )
}

export default Header

