import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Container from "../UI/Container/Container";
import classes from "./Portfolio.module.css";
import BudgetTeam from "../../Assets/BudgetTeam.png";
import PlanetPreserveLaptop from "../../Assets/PlanetPreserveLaptop.png";
import emailNewsletter from "../../Assets/emailsNewsletter.png";
import extracts from "../../Assets/herbalExtracts.png";

function Portfolio({ setWork }) {
  const portfolio = useRef(null);

  useEffect(() => {
    setWork(portfolio.current);
  }, []);

  return (
    <section className={classes.portfolio} ref={portfolio}>
      <div className={`${classes.work}`}>
        <Container>
          <div className={classes["work-grid"]}>
            <div className={classes.line}></div>

            <div className={classes.col2}>
              <h1>My Work</h1>
              <p>
                It is my mission to put the proper time in effort into to every
                project I undertake ensuring it is the very best it can possibly
                be – and I will not stop until each project is{" "}
                <span>accessible, responsive, and eye-pleasing.</span>
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Project 1 */}
      <Container>
        <div className={`${classes.col}`}>
          <div className={`${classes.chime}`}>
            <div className={classes["portfolio-content"]}>
              <div className={classes["img-wrapper"]}>
                <LazyLoadImage
                  className={classes["portfolio-img"]}
                  src={extracts}
                  alt="herbal stoner extracts"
                  width="100%"
                  height="auto"
                  effect="blur"
                />
              </div>

              <h2 className={classes["portfolio-h2"]}>
                Herbal Stoners - Medical/Rec Dispensary
              </h2>

              <p className={classes["portfolio-text"]}>
                Herbal Stoners is a Medical / Recreational Dispensary offering a
                variety of products, cart and checkout functionality.
              </p>

              <div className={classes["btn-wrapper"]}>
                <Link to="/herbal-stoner-project" className={classes.mb}>
                  <button
                    type="button"
                    className={`${classes["portfolio-btn"]} blue`}
                  >
                    View Project
                  </button>
                </Link>

                <a
                  href="https://github.com/DariusGracey814/Herbal_Stoners_Application"
                  target="_blank"
                >
                  <button
                    type="button"
                    className={`${classes["portfolio-btn"]}`}
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>

            {/* Planet Preserve */}
            <div className={classes["portfolio-content"]}>
              <div className={classes["img-wrapper"]}>
                <LazyLoadImage
                  className={classes["portfolio-img"]}
                  src={PlanetPreserveLaptop}
                  alt="planet preserve"
                  width="100%"
                  height="auto"
                  effect="blur"
                />
              </div>

              <h2 className={classes["portfolio-h2"]}>
                Planet Preserve - Eco Contribution Tracker
              </h2>

              <p className={classes["portfolio-text"]}>
                Planet Preserve an Eco Contribution Tracker allows people
                interested in saving the environment to track and view eco
                contributions around them
              </p>

              <div className={classes["btn-wrapper"]}>
                <Link to="/planet-preserve-project" className={classes.mb}>
                  <button
                    type="button"
                    className={`${classes["portfolio-btn"]} blue`}
                  >
                    View Project
                  </button>
                </Link>

                <a
                  href="https://github.com/DariusGracey814/Chime-Promtional-Html-Email"
                  target="_blank"
                >
                  <button
                    type="button"
                    className={`${classes["portfolio-btn"]}`}
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className={`${classes.emails}`}>
            <div className={classes["portfolio-content"]}>
              <div className={classes["img-wrapper"]}>
                <LazyLoadImage
                  className={classes["portfolio-img"]}
                  src={BudgetTeam}
                  alt="chime landing page"
                  width="100%"
                  height="auto"
                  effect="blur"
                />
              </div>

              <h2 className={classes["portfolio-h2"]}>
                Budgetly Budget Tracker
              </h2>

              <p className={classes["portfolio-text"]}>
                Budgetly allows you to easily manage and track your budgets and
                expenses while generating expense reports and offer data
                visualization
              </p>

              <div className={classes["btn-wrapper"]}>
                <Link to="/budgetly-budget-application" className={classes.mb}>
                  <button
                    type="button"
                    className={`${classes["portfolio-btn"]} blue`}
                  >
                    View Project
                  </button>
                </Link>

                <a
                  href="https://github.com/DariusGracey814/Chime-Landing-page"
                  target="_blank"
                >
                  <button
                    type="button"
                    className={`${classes["portfolio-btn"]}`}
                  >
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
