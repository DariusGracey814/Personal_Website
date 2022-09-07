import React, { useState, useRef, useEffect } from 'react';

// Components
import ContainerMd from '../UI/Container/Container';
import redux from '../../Assets/redux.png';

// Stylesheet
import classes from './Skills.module.css';

function Skills({ setSkills }) { 
  const [skillsActive, setSkillsActive] = useState(false);
  const skillsSection = useRef();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  }

  useEffect(() => {
    setSkills(skillsSection.current);
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setSkillsActive(entry.isIntersecting);
    }, options)

    observer.observe(skillsSection.current);
    
  }, []);


  return (
    <section id="skills" className={classes.skills} ref={skillsSection}>
        <ContainerMd>
            <div className={`${classes['skills-container']} ${!skillsActive ? null : classes.active}`}>
               <h1>Coding | Design Skills</h1>

               <div className={classes['skills-wrapper']}>
                    <div className={`${classes['icon-box']} ${classes.htmlBox}`}>
                        <i className={`fa-brands fa-html5 ${classes.icon} ${classes.html}`}></i>
                        <div className={classes.text}>Html</div>
                    </div>

                    <div className={`${classes['icon-box']} ${classes.cssBox}`}>
                        <i className={`fa-brands fa-css3-alt ${classes.icon} ${classes.css}`}></i>
                        <div className={classes.text}>Css</div>
                    </div>

                    <div className={`${classes['icon-box']} ${classes.jsBox}`}>
                        <i className={`fa-brands fa-js ${classes.icon} ${classes.js}`}></i>
                        <div className={classes.text}>Javascript</div>
                    </div>
 
                    <div className={`${classes['icon-box']} ${classes.sassBox}`}>
                        <i className={`fa-brands fa-sass ${classes.icon} ${classes.sass}`}></i>
                        <div className={classes.text}>Sass</div>
                    </div>

                    <div className={`${classes['icon-box']} ${classes.bootstrapBox}`}>
                        <i className={`fa-brands fa-bootstrap ${classes.icon} ${classes.bootstrap}`}></i>
                        <div className={classes.text}>Bootstrap</div>
                    </div>

                    <div className={`${classes['icon-box']} ${classes.reactBox}`}>
                        <i className={`fa-brands fa-react ${classes.icon} ${classes.react}`}></i>
                        <div className={classes.text}>React</div>
                    </div>

                    <div className={`${classes['additional-skills']}`}>
                        <ul>
                            <li>Photoshop / Sketch</li>
                            <li>Mailchimp / Klaviyo</li>
                            <li>Litmus / Emails on Acid</li>
                            <li>Imgbb / Putsmail</li>
                        </ul>
                        <div className={classes.textA}>Additional Skills</div>
                    </div>

                    <div className={`${classes['additional-skills']}`}>
                        <ul>
                            <li>Outlook Conditional Css</li>
                            <li>Accessibility</li>
                            <li>WCAG Compliance</li>
                            <li>Optimization</li>
                        </ul>
                        <div className={classes.textA}>Additional Skills</div>
                    </div>
               </div>
            </div>

            <div className={`${classes.workflow}`}>
                <div className={`${classes['h2-wrapper']}`}>
                    <h2>Work Process</h2>
                </div>

                <div className={`${classes.progressFlow}`}>
                    <div className={classes.progress}>
                        <i className="fa-solid fa-message"></i>
                        <p>Discover</p>
                    </div>

                    <div className={classes.progress}>
                        <i className="fa-solid fa-lightbulb"></i>
                        <p>Idea</p>
                    </div>

                    <div className={classes.progress}>
                        <i className="fa-solid fa-compass-drafting"></i>
                        <p>Design</p>
                    </div>

                    <div className={classes.progress}>
                        <i className="fa-solid fa-compass-drafting"></i>
                        <p>Develop</p>
                    </div>

                    <div className={classes.progress}>
                        <i className="fa-solid fa-file-code"></i>
                        <p>Test</p>
                    </div>

                    <div className={classes.progress}>
                        <i className="fa-solid fa-rocket"></i>
                        <p>Launch</p>
                    </div>
                </div>
            </div>
        </ContainerMd>
    </section>
  );
};

export default Skills;
