import React from 'react';
import DocumentCard from '../../components/document card/DocumentCard';
import StartApplicationButton from '../../components/start application button/StartApplicationButton';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <p>Welcome to KUAC (KOREAN UNIVERSITIES ADMISSION CENTER) Admission Application Forms<br/>Before continuing with the application please download and take a look on the following documents.</p>
      <DocumentCard />
      <StartApplicationButton />
    </div>
  );
}

export default Home;
