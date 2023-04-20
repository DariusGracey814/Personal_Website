import React, { Suspense } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// Components
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import Hero from '../Components/Hero/Hero';
import Skills from '../Components/Skills/Skills';
import About from '../Components/AboutMe/About';
import Portfolio from '../Components/Portfolio/Portfolio';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/UI/Footer/Footer';

function Home({ heroIntersecting, setHeroIntersecting, setAbout, setSkills, setWork, work, setContact }) {
  
  return (
    <main>
        <Hero setHeroIntersecting={setHeroIntersecting} work={work} />

        <Suspense fallback={<LoadingSpinner />}>
            <LazyLoadComponent>
              <About heroIntersecting={heroIntersecting} setAbout={setAbout}  />
            </LazyLoadComponent>

            <LazyLoadComponent>
              <Skills setSkills={setSkills} />
            </LazyLoadComponent>

            <LazyLoadComponent>
              <Portfolio setWork={setWork} />
            </LazyLoadComponent>

            <LazyLoadComponent>
              <Contact setContact={setContact} />
            </LazyLoadComponent>

            <LazyLoadComponent>
              <Footer />
            </LazyLoadComponent>
        </Suspense>
    </main>
  );
};

export default Home;
