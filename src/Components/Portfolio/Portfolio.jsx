import React, { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Container from '../UI/Container/Container';
import classes from './Portfolio.module.css';
import chimeLanding from '../../Assets/chimeLanding.png';
import chimePromotion from '../../Assets/chimePromotional.png';
import emailNewsletter from '../../Assets/emailsNewsletter.png';
import udemyReceipt from '../../Assets/udemyReciept.png';
import sheinPromotion from '../../Assets/Shein-port.png';

function Portfolio({ setWork }) {
  const portfolio = useRef(null);

  useEffect(() => {
    setWork(portfolio.current);
  }, []);

  return (
    <section className={classes.portfolio} ref={portfolio}>
        <div className={`${classes.work}`}>
            <Container>
                <div className={classes['work-grid']}>
                    <div className={classes.line}></div>

                    <div className={classes.col2}>
                        <h1>My Work</h1>
                        <p>
                        It is my mission to put the proper time in effort into to every project I undertake ensuring it is the very best it can possibly be – and I will not stop until each project is <span>accessible, responsive, and eye-pleasing.</span>
                        </p>
                    </div>
                </div>
            </Container>
        </div>   
        
        {/* Project 1 */}
        <Container>
            <div className={`${classes.col}`} >
                <div className={`${classes.chime}`}>
                    <div className={classes['portfolio-content']}>
                        <div className={classes['img-wrapper']}>
                            <LazyLoadImage
                            className={classes['portfolio-img']}
                            src={sheinPromotion}
                            alt="shein promotional email"
                            width="100%"
                            height="auto"
                            effect="blur"
                            />
                        </div>

                        <h2 className={classes['portfolio-h2']}>Shein Clothing Promotional Email</h2>

                        <p className={classes['portfolio-text']}>Remade a responsive Shein promotional email by using HTML, CSS, VML & MJML Framework.</p>

                        <div className={classes['btn-wrapper']}>
                            <a href="https://shein-promotional-email.netlify.app/" target="_blank" className={classes.mb}>
                                <button type="button" className={`${classes['portfolio-btn']} blue`}>View Project</button>
                            </a>

                            <a href="https://github.com/DariusGracey814/Shein-Promotional-Email" target="_blank">
                                <button type="button" className={`${classes['portfolio-btn']}`}>View Code</button>
                            </a>
                        </div>
                    </div>

                    <div className={classes['portfolio-content']}>
                        <div className={classes['img-wrapper']}>
                            <LazyLoadImage
                            className={classes['portfolio-img']}
                            src={chimePromotion}
                            alt="chime landing page"
                            width="100%"
                            height="auto"
                            effect="blur"
                            />   
                        </div>

                        <h2 className={classes['portfolio-h2']}>Chime Newsletter Email</h2>

                        <p className={classes['portfolio-text']}>Remade a responsive Chime newsletter email by using HTML, CSS, VML & MJML Framework.</p>

                        <div className={classes['btn-wrapper']}>
                            <a href="https://chime-promotional-email.netlify.app/" target="_blank" className={classes.mb}>
                                <button type="button" className={`${classes['portfolio-btn']} blue`}>View Project</button>
                            </a>

                            <a href="https://github.com/DariusGracey814/Chime-Promtional-Html-Email" target="_blank">
                                <button type="button" className={`${classes['portfolio-btn']}`}>View Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${classes.emails}`}>
                    <div className={classes['portfolio-content']}>
                        <div className={classes['img-wrapper']}>
                            <LazyLoadImage
                            className={classes['portfolio-img']}
                            src={chimeLanding}
                            alt="chime landing page"
                            width="100%"
                            height="auto"
                            effect="blur"
                            />
                        </div>

                        <h2 className={classes['portfolio-h2']}>Chime Landing Page</h2>

                        <p className={classes['portfolio-text']}>Remade a responsive landing page by using HTML, CSS, and JavaScript</p>

                        <div className={classes['btn-wrapper']}>
                            <a href="https://chime-landing-page.netlify.app/" target="_blank" className={classes.mb}>
                                <button type="button" className={`${classes['portfolio-btn']} blue`}>View Project</button>
                            </a>

                            <a href="https://github.com/DariusGracey814/Chime-Landing-page" target="_blank">
                                <button type="button" className={`${classes['portfolio-btn']}`}>View Code</button>
                            </a>
                        </div>
                    </div>

                    <div className={classes['portfolio-content']}>
                            <div className={classes['img-wrapper']}>
                                <LazyLoadImage
                                className={classes['portfolio-img']}
                                src={emailNewsletter}
                                alt="emails on acid newsletter"
                                width="100%"
                                height="auto"
                                effect="blur"
                                />
                            </div>

                            <h2 className={classes['portfolio-h2']}>Email on Acid Promotional Email</h2>

                            <p className={classes['portfolio-text']}>Remade a promotional Emails an Acid newsletter email by using HTML, CSS, VML & MJML Framework.</p>

                            <div className={classes['btn-wrapper']}>
                                <a href="https://emails-on-acid-newsletter.netlify.app/" target="_blank" className={classes.mb}>
                                    <button type="button" className={`${classes['portfolio-btn']} blue`}>View Project</button>
                                </a>

                                <a href="https://github.com/DariusGracey814/Emails-on-Acid-Newsletter-Html-Email" target="_blank">
                                    <button type="button" className={`${classes['portfolio-btn']}`}>View Code</button>
                                </a>
                            </div>
                    </div>
                </div>

                <div className={`${classes.emails}`}>
                    <div className={classes['portfolio-content']}>
                        <div className={classes['img-wrapper']}>
                            <LazyLoadImage
                            className={classes['portfolio-img']}
                            src={udemyReceipt}
                            alt="udemy receipt email"
                            width="100%"
                            height="auto"
                            effect="blur"
                            />
                        </div>

                        <h2 className={classes['portfolio-h2']}>Udemy Receipt Email</h2>

                        <p className={classes['portfolio-text']}>Remade a responsive Udemy receipt email by using HTML, CSS, VML & MJML Framework.</p>

                        <div className={classes['btn-wrapper']}>
                            <a href="https://udemy-reciept.netlify.app/" target="_blank" className={classes.mb}>
                                <button type="button" className={`${classes['portfolio-btn']} blue`}>View Project</button>
                            </a>

                            <a href="https://github.com/DariusGracey814/Udemy-Reciept-Email" target="_blank">
                                <button type="button" className={`${classes['portfolio-btn']}`}>View Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    </section>
  );
};

export default Portfolio;
