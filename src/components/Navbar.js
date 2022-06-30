import React from 'react'
import logo from '../resources/images/logo.webp';
import menu from '../resources/images/menu.svg';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-panel">
                <div className="logo-img">
                    <img src={logo} alt="Yiğidosoft" />
                </div>
                <div className="logo-text">
                    <a href="/" translate="no">YiğidoSoft</a>
                </div>
            </div>

            <div className="nav-menu">
                <ul>
                    <li><a href="/" className="active">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#sponsors">Sponsors</a></li>
                     {/*
                    <li><a href="#about">About</a></li>
                    <li><a href="/careers">Careers</a></li>
                    */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div id="mobile" className="mobile-menu">

                {/* Button to close the overlay navigation */}
                <a href={void(0)} className="closebtn" onClick={()=>document.getElementById("mobile").style.width = "0%"}>&times;</a>

                {/* Overlay content  */}
                <div className="mobile-menu-content">
                    <a href="/" className="active" onClick={()=>document.getElementById("mobile").style.width = "0%"}>Home</a>
                    <a href="#products" onClick={()=>document.getElementById("mobile").style.width = "0%"}>Products</a>
                    <a href="#sponsors" onClick={()=>document.getElementById("mobile").style.width = "0%"}>Sponsors</a>
                    {/*
                    <a href="#about" onClick={()=>document.getElementById("mobile").style.width = "0%"}>About</a>
                    <a href="/careers" onClick={()=>document.getElementById("mobile").style.width = "0%"}>Careers</a>
                    */}
                    <a href="#contact" onClick={()=>document.getElementById("mobile").style.width = "100%"}>Contact</a>
                </div>

            </div>
            <div className="nav-btn">
                <a onClick={()=>document.getElementById("mobile").style.width = "100%"}>
                    <img src={menu} alt="menu" />
                </a>
            </div>
        </div>
    )
}