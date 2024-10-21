import React from 'react';
import kuac from '../../images/img2_3_01.jpg'
import kdu from '../../images/kdu.jpeg'
import { Link } from 'react-router-dom'
import './Header.css'; 

function Header() {
    return (
        <header className="header">
            <Link to='/' className="logo-container left-logo">
                <img src={kuac} alt="Left Logo" className="logo" />
            </Link>
            <div className='headings-container'>
            <h2 className="header-title">ADMISSION APPLICATION FORMS<br/>APPLY NOW!!</h2>
            </div>
            <Link to='/' className="logo-container right-logo">
                <img src={kdu} alt="Right Logo" className="logo" />
            </Link>
        </header>
    );
}

export default Header;
