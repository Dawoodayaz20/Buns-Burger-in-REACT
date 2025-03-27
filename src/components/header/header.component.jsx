import React from 'react';
import './header.component.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
        <img id="logopic" className="logo" alt="Buns and Burger Logo" src={logo} />
        <h1>Buns and Burgers</h1>
        <div className="cart_icon">
            <a href="Cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
        <nav id="navbar">
        <a className="home" href="/index">Home</a>
        <a className="menu" href="/menu">Menu</a>
        <a className="deals" href="/deals">Hot Deals</a>
        <a className="about" href="/about">About Us</a>
        </nav>
       </header>
  )
}

export default Header

