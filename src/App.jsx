import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './Components/UI/Header/Header';
import Home from './Pages/Home';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import ScrollTopButton from './Components/ScrollTopButton/ScrollTopButton';

// Stylesheet
import './App.css';

function App() {
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState(false);
  const [heroIntersecting, setHeroIntersecting] = useState(false);

  // Sections
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState(null);
  const [work, setWork] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <>
      {load ? <LoadingSpinner /> : 
      <div className="App">
        <Router>
            <Header setShow={setShow} heroIntersecting={heroIntersecting} about={about} skills={skills} work={work} contact={contact} />
            <div className={!show ? null : 'menu-overlay'}></div>

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home heroIntersecting={heroIntersecting} setHeroIntersecting={setHeroIntersecting} setAbout={setAbout} setSkills={setSkills} setWork={setWork} setContact={setContact} work={work} />} />
            </Routes>

            <ScrollTopButton heroIntersecting={heroIntersecting} />
        </Router>
      </div>
      }
    </>
  );
}

export default App;
