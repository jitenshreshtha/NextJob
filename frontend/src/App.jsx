import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostjobPage from './pages/PostjobPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/postjob' element={<PostjobPage />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
