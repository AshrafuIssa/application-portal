import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/home/Home'
import ApplicationCenter from './pages/application center/ApplicationCenter'
import GraduateForm from './pages/graduate form/GraduateForm'
import UndergraduateForm from './pages/undergraduate form/UndergraduateForm'
import KapForm from './pages/kap form/KapForm'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import EapForm from './pages/eap form/EapForm'
import './App.css'

function App() {
  return(
    <div id='root'>
    <Router basename='/application-portal'>
      <ScrollToTop />
      <div className='main-content'>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/applicationCenter' element = {<ApplicationCenter />} />
        <Route path='/graduateForm' element = {<GraduateForm />} />
        <Route path='/undergraduateForm' element = {<UndergraduateForm />} />
        <Route path='/kapForm' element = {<KapForm />} />
        <Route path='/eapForm' element = {<EapForm />} />      </Routes>
      </div>
      <Footer />
      <ToastContainer 
        position='top-right'
        autoClose={19000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </Router>
    </div>
  )
}

export default App

