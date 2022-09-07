import React, { useRef, useEffect } from 'react'; 
import { a } from 'react-router-dom';

// Components
import Bubble from '../BubbleAnimation/Bubble';
import ContainerMd from '../UI/Container/Container';

// Stylesheet
import classes from './Hero.module.css';

// Image
import heroImg from '../../Assets/hero.jpg';

function Hero({ setHeroIntersecting, work }) {
  const hero = useRef();
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  }

  // hero intersecting 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeroIntersecting(entry.isIntersecting);
      
    }, options)

    observer.observe(hero.current);
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.offsetTop,
        behavior: "smooth"
    });
  };

  return (
    <section className={classes.hero} aria-label="line graphic background image" ref={hero}>

       {/* Bubble Animation */}
       <Bubble bubbleStyle="bubble" color="rgba(6, 197, 137, 0.18)" top="10%" left="-3%" />
       <Bubble bubbleStyle="bubble2" color="rgba(13, 126, 207, 0.18)" top="75%" left="-3%" />
       <Bubble bubbleStyle="bubble" color="rgba(13, 126, 207, 0.18)" top="25%" left="42%" />
       <Bubble bubbleStyle="bubble2" color="rgba(13, 126, 207, 0.18)" top="-5%" left="72%" />
       <Bubble bubbleStyle="bubble" color="rgba(13, 126, 207, 0.18)" top="60%" left="80%" />
       <Bubble bubbleStyle="bubble2" color="rgba(6, 197, 137, 0.18)" top="85%" left="50%" />
       
       {/* Social Icons */}
       <div className={classes['icon-wrapper']}>
            <div className={classes.social}>
              <a href="https://www.linkedin.com/in/dariusgracey1/" target="_blank" title="linkedin">
                <i className={`fa-brands fa-linkedin ${classes['social-icon']}`}></i>
              </a>

              <a href="https://github.com/DariusGracey814" target="_blank" title="github">
                <i className={`fa-brands fa-square-github ${classes['social-icon']}`}></i>
              </a>

              <a href="https://twitter.com" target="_blank" title="twitter">
                <i className={`fa-brands fa-square-twitter ${classes['social-icon']}`}></i>
              </a>
            </div>

            <div className={classes.line}></div>
       </div>

      <ContainerMd>
        <div className={classes['hero-content']}>
                <p className={classes.intro}>Hi, my name is</p>
                <h1>Darius Gracey</h1>
                <h2>I build things for the web.</h2>
                <p className={classes['intro-text']}>
                   I'm a HTML email Developer / Front End Web Developer based in Michigan. I enjoy building beautiful<span> responsive emails and websites</span> 
                </p>

            <div className={classes['hero-buttons']}> 
                    <button className={`${classes['hero-btn']} blue`} type="button" onClick={() => scrollToSection(work)}>My Work</button>

                    <a href="https://github.com/DariusGracey814" target="_blank">
                        <button className={`${classes['hero-btn']} green`} type="button">My Github <i className="fa-brands fa-github"></i></button>
                    </a>
            </div>
        </div>
      </ContainerMd>
    </section>
  );
};

export default Hero;
