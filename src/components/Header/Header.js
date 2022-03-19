import React from 'react';
import './Header.css';
import logo from '../../logos/logo.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-div'>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Companies</a>
                    <a href="#">About Us</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;