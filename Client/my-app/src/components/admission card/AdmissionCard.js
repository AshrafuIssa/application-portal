import React from 'react'
import './AdmissionCard.css'

function AdmissionCard(){
    return(
        <div className='admission-card-container'>
            <div className='card'>
                <h3>General Guidline</h3>
                <p>These are general lines</p>
            </div>
            <div className='card'>
                <h3>Application Process</h3>
                <p>These are all the process for the application</p>
            </div>
            <div className='card'>
                <h3>Scholarship and Fees</h3>
                <p>These are all Scholarship and all the tution fees</p>
            </div>
        </div>
    )
}

export default AdmissionCard