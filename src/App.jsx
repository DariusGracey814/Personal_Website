import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "./Components/UI/Header/Header";
import Home from "./Pages/Home";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import ScrollTopButton from "./Components/ScrollTopButton/ScrollTopButton";
import HerbalStoner from "./Pages/HerbalStoner";
import PlanetPreserve from "./Pages/PlanetPreserve";
import BudgetlyApp from "./Pages/BudgetlyApp";

// Stylesheet
import "./App.css";

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
      {load ? (
        <LoadingSpinner />
      ) : (
        <main className="App">
          <Header
            setShow={setShow}
            heroIntersecting={heroIntersecting}
            about={about}
            skills={skills}
            work={work}
            contact={contact}
          />
          <div className={!show ? null : "menu-overlay"}></div>

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <Home
                  heroIntersecting={heroIntersecting}
                  setHeroIntersecting={setHeroIntersecting}
                  setAbout={setAbout}
                  setSkills={setSkills}
                  setWork={setWork}
                  setContact={setContact}
                  work={work}
                />
              }
            />
            <Route path="/herbal-stoner-project" element={<HerbalStoner />} />
            <Route
              path="/planet-preserve-project"
              element={<PlanetPreserve />}
            />
            <Route
              path="/budgetly-budget-application"
              element={<BudgetlyApp />}
            />
          </Routes>

          <ScrollTopButton heroIntersecting={heroIntersecting} />
        </main>
      )}
    </>
  );
}

export default App;
