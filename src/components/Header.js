
import React from "react";
import logo from '../images/food-logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Food logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;