import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './KapForm.css';

const KapForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    givenNames: '',
    whatsappNumber: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    intendedProgram: 'KAP (Korean for Academic Purpose)',
    intendedCourse: '',
    graduationYear: '',
    gpa: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
    // Add form submission logic here
  };

  return (
    <div className='form-page'>
    <div className="kap-form-container">
      <h2>KAP PROGRAM APPLICATION FORM</h2>
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
              <option value="KAP (Korean for Academic Purpose)">
                KAP (Korean for Academic Purpose)
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Intended Course after KAP Completion</label>
            <select
              name="intendedCourse"
              value={formData.intendedCourse}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Course --</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h4>ACADEMIC INFORMATION</h4>
          <div className="form-group">
            <label>High School Graduation Year</label>
            <input
              type="number"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              required
              placeholder="YYYY"
              min="2020"
              max={new Date().getFullYear()}
            />
          </div>
          <div className="form-group">
            <label>High School GPA</label>
            <input
              type="text"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
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
    </div>
    </div>
  );
};

export default KapForm;