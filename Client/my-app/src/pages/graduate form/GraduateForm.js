import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './GraduateForm.css';

const GraduateForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    givenNames: '',
    whatsappNumber: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    intendedProgram: '',
    previousDegree: '',
    gpa: '',
    englishTestName: '',
    englishProficiencyScore: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
    
    try{
      const response = await fetch('http://localhost:5000/graduates/graduateData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok){
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      toast.success(data.message, {
        position: 'top-right', // Position at the top-right corner
        autoClose: 19000, // Auto close after 5 seconds
        hideProgressBar: false, // Show progress bar
        closeOnClick: true, // Allow close on click
        pauseOnHover: true, // Pause the toast when hovered
        draggable: true, // Allow dragging the toast
    });

    }
    catch(error){
      console.error('Error while submiting the form', error )

      toast.error('Error: ' + error.message, {
        position: 'top-right', // Position at the top-right corner
        autoClose: 19000, // Auto close after 5 seconds
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true,
    });
    }
  };

  return (
    <div className='form-page'>
    <div className="graduate-form-container">
      <h2>GRADUATE PROGRAM APPLICATION FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h4>PERSONAL INFORMATION</h4>
          <div className="form-group-row">
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Given Names</label>
              <input
                type="text"
                name="givenNames"
                value={formData.givenNames}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>WhatsApp Number</label>
              <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>PROGRAM INFORMATION</h4>
          <div className="form-group">
            <label>Intended Program</label>
            <select
              name="intendedProgram"
              value={formData.intendedProgram}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Program --</option>
              <option value="Master of Engineering in artificial intelligence and data science">
                Master of Engineering in artificial intelligence and data science
              </option>
              <option value="Master of Arts in international business administration">
                Master of Arts in international business administration
              </option>
              <option value="Master of Arts in international hospitality and tourism management">
                Master of Arts in international hospitality and tourism management
              </option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h4>ACADEMIC INFORMATION</h4>
          <div className="form-group">
            <label>Previous Degree Earned</label>
            <input
              type="text"
              name="previousDegree"
              value={formData.previousDegree}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>GPA</label>
            <input
              type="text"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>English Proficiency Test Name</label>
            <select
              name="englishTestName"
              value={formData.englishTestName}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Test --</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="CEFR">CEFR</option>
              <option value="English is my first language">English is my first language</option>
            </select>
          </div>
          <div className="form-group">
            <label>English Proficiency Scores (Test Scores/Level)</label>
            <input
              type="text"
              name="englishProficiencyScore"
              value={formData.englishProficiencyScore}
              onChange={handleChange}
              placeholder="Test Scores/Level"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
          <Link to='/applicationCenter'>
            <button className='back-to-forms'>Back to Forms</button>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default GraduateForm;
