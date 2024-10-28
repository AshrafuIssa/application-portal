import React from 'react';
import Logo from '../../images/4.jpg'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
          <div className='footer-image'>
            <img src= {Logo} alt='logo-image'/>
          </div>
            <div className='footer-data'>
            <div className="footer-info">
                <p>KUAC Business Registration No: 130-86-78730</p>
                <p>E-mail: <a href="mailto:info@ku-ac.com">info@ku-ac.com</a></p>
            </div>
            <div className="footer-address">
                <p>ADDRESS: 2002-ho, Jungdong Benesta, 252, Gilju-ro, Bucheon-si, Gyeonggi-do, Republic of Korea</p>
                <p>TEL: 032-323-9652 | FAX: 032-323-9653 | WHATSAPP: +82 10-7599-9627</p>
            </div>
            <div className="footer-copyright">
                <p>COPYRIGHT ⓒ 2018 KUAC ALL RIGHTS RESERVED</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
