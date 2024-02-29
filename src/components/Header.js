
import React, { useContext } from "react";
import logo from '../images/food-logo.png';
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {name} = useContext(UserContext);

    const items = useSelector((state) => state.cartSlice.items);

    console.log(items);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Food logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/cart">Cart {items.length}</Link></li>
                    <li><Link><button>Login</button></Link></li>
                    <li><b>{name}</b></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;