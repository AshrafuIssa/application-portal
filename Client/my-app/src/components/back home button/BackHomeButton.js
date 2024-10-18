import React from 'react'
import { Link } from 'react-router-dom'
import './BackHomeButton.css'

const BackHomeButton = () => {
  return (
    <div className="button-container">
      <Link to='/'>
        <button className="back-button">Home Page</button>
      </Link>
    </div>
  );
}

export default BackHomeButton;