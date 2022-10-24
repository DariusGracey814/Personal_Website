import React, { useState, useEffect, useRef } from 'react';

import Container from '../UI/Container/Container';
import classes from './Contact.module.css';

function Contact({ setContact }) {
  const contactSection = useRef(null);

  useEffect(() => {
    setContact(contactSection.current);
  }, []);

  return (
    <section className={classes.contact} ref={contactSection}>
        <Container>
            <div className={classes['contact-wrapper']}>
                <h1>Contact Me</h1>

                <p>
                I’m interested in various opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to send a email.
                </p>
                
                <a href='mailto:dariusgracey500@gmail.com' target="_blank" role="button">
                    <button className={`${classes.submitBtn} green`}>Contact Me</button>
                </a>
            </div>
        </Container>
    </section>
  );
};

export default Contact;
