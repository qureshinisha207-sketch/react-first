import React from "react";
import logo from '/src/assets/nexoralogo(2).png'
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
        <div className="navbar-section">
           <div className="navbar-logo"><img src={logo}/></div>
           
            <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="category">Category</Link></li>
                <li>Deals</li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
           
        </div>
        </>
    )
}

export {Navbar}