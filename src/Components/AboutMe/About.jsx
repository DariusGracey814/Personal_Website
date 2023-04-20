import React, { useRef, useEffect } from "react";

// Component
import ContainerMd from "../UI/Container/Container";
import darius from "../../Assets/dariusgracey.jpg";

// Stylesheet
import classes from "./About.module.css";

function About({ heroIntersecting, setAbout }) {
  const aboutSection = useRef(null);

  useEffect(() => {
    setAbout(aboutSection.current);
  }, []);

  return (
    <section id="about" className={classes.about} ref={aboutSection}>
      <ContainerMd>
        <div className={classes["about-content"]}>
          <div
            className={`${classes["about-text"]} ${
              !heroIntersecting ? classes.active : null
            }`}
          >
            <h1>About Me</h1>

            <p>
              Hello! My name is Darius, I am a FullStack Developer, also a
              student looking to put my skills to use. I am self motivated,
              punctual, reliable, a great team player, and I love solving
              problems. Details are paid close attention to when translating
              design mockups into{" "}
              <span>eye pleasing responsive applications.</span>
            </p>
          </div>

          <div
            className={`${classes["about-img"]} ${
              !heroIntersecting ? classes.active : null
            }`}
          >
            <img className={classes.img} src={darius} alr="Darius Gracey" />
          </div>
        </div>
      </ContainerMd>
    </section>
  );
}

export default About;
