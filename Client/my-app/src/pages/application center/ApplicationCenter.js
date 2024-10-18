import React from 'react'
import ApplicationCard from '../../components/application card/ApplicationCard'
import BackHomeButton from '../../components/back home button/BackHomeButton'
import './ApplicationCenter.css'

const ApplicationCenter = () => {
    return (
        <div className='application-center-container'>
            <h3>CHOOSE APPLICATION FORM</h3>
            <ApplicationCard />
            <BackHomeButton />
        </div>
    )
}

export default ApplicationCenter;