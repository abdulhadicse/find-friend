import React from 'react';
import logo from '../../assets/images/logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="header_section">
            
            <div className="logo_main">
                <img src={logo} alt=""/>
            </div>

            <div className="little">
                <h2>Find Friend</h2>
            </div>


            <div className="nav_bar">
                <nav>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/friends">Friends</a>
                    <a href="/roles">Roles</a>
                    <a href="/team">Team</a>
                </nav>
            </div>
            
        </div>
    );
};

export default Navbar;