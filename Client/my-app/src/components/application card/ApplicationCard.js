import React from 'react';
import { Link } from 'react-router-dom';
import './ApplicationCard.css'; 

const ApplicationCard = () => {
  return (
    <div className="application-card-container">

      {/* Graduate Application Card */}
      <Link to="/graduateForm" className="application-card">
        <h3>Graduate</h3>
        <p>Click here to start Graduate Application</p>
      </Link>

      {/* Undergraduate Application Card */}
      <Link to="/undergraduateForm" className="application-card">
        <h3>Undergraduate</h3>
        <p>Click here to start Undergraduate Application</p>
      </Link>

      {/* KAP Application Card */}
      <Link to="/kapForm" className="application-card">
        <h3>KAP</h3>
        <p>Click here to start KAP (Korean for Academic Purpose) Application</p>
      </Link>

      {/* EAP Application Card */}
      <Link to="/eapForm" className="application-card">
        <h3>EAP</h3>
        <p>Click here to start EAP (English for Academic Purpose) Application</p>
      </Link>

    </div>
  );
}

export default ApplicationCard;
