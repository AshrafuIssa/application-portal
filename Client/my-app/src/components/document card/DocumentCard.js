import React from 'react';
import './DocumentCard.css'; // Import the CSS file

const DocumentCard = () => {
  return (
    <div className="document-container">
      <a href="https://drive.google.com/file/d/1HVhjK39gWVhw2WZu7sL2wImXZe05CGym/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>Final Documents</h3>
          <p>This is the list of final documents.</p>
        </div>
      </a>

      <a href="https://drive.google.com/file/d/1tr3Iq2zKo0bycDJyCbODbWcHmmRcENGj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>Study Plan</h3>
          <p>This is the student study plan.</p>
        </div>
      </a>

      <a href="https://drive.google.com/file/d/1-PwbXAgkBzlvJHVTI_AD9TJd0vRTphbe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>Student Code of Conduct</h3>
          <p>This is the student code of conduct.</p>
        </div>
      </a>

      <a href="https://global.kduniv.ac.kr/global/index.php?pCode=1636097085e" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>General Guideline</h3>
          <p>This is the General guidelines.</p>
        </div>
      </a>

      <a href="https://global.kduniv.ac.kr/global/index.php?pCode=1434967568" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>Application Process</h3>
          <p>These are the application processes.</p>
        </div>
      </a>

      <a href="https://global.kduniv.ac.kr/global/index.php?pCode=1434967575" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>Documents Required</h3>
          <p>These are all the documents required.</p>
        </div>
      </a>

      <a href="https://global.kduniv.ac.kr/global/index.php?pCode=1636097108" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3>Scholarship and Fees</h3>
          <p>Here are all the scholarship and tuition fees.</p>
        </div>
      </a>
    </div>
  );
}

export default DocumentCard;
