import React from 'react';
import DocumentCard from '../../components/document card/DocumentCard';
import StartApplicationButton from '../../components/start application button/StartApplicationButton';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <p className='p-top'>Welcome to KUAC (KOREAN UNIVERSITIES ADMISSION CENTER) Admission Application Forms<br/>Before continuing with the application please download and take a look on the following documents.<br/><br/>If you have the documents already, please click the button below to start applications</p>
      <StartApplicationButton />
      <DocumentCard />
    </div>
  );
}

export default Home;
