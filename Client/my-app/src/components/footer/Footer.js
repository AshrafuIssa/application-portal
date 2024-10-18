import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <h4 className="footer-heading">Contact Us</h4> 
      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span>Email: <a href="mailto:jcw@ku-ac.com">jcw@ku-ac.com</a></span>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        <span>WhatsApp: <a href="https://wa.me/821075999627">+82 1075999627</a></span>
      </div>
    </footer>
  );
}

export default Footer;
