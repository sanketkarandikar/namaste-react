
import React from "react";
import logo from '../images/food-logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Food logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link><button>Login</button></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;