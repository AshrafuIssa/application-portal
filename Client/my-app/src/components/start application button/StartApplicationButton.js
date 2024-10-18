import React from 'react'
import { Link } from 'react-router-dom'
import './StartApplicationButton.css'

const StartApplicationButton = () => {
  return (
    <div className="button-container">
      <Link to='applicationCenter'>
        <button className="start-button">Start Application</button>
      </Link>
    </div>
  );
}

export default StartApplicationButton;
