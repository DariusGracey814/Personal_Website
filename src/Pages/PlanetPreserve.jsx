import React from "react";
import { Link } from "react-router-dom";
import classes from "./HerbalStoner.module.css";
import image from "../Assets/PlanetPreserve.png";

function PlanetPreserve() {
  return (
    <section className={classes["herbal-section"]}>
      <div className={classes["goBack-wrapper"]}>
        <Link to="/home" className={`${classes.goBack} green`}>
          Go Back
        </Link>
      </div>

      <h1 className={classes["herbal-h1"]}>
        Planet Preserve &mdash; FullStack Project
      </h1>
      <div className={classes.imageWrapper}>
        <img
          src={image}
          alt="planet preserve dashboard"
          width="80%"
          className={classes.img}
        />
      </div>
      <div>
        <h2 className={classes["herbal-h1"]}>
          Contributions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <a
            href="https://herbal-stoner-backend.web.app/"
            target="_blank"
            title="planet preserve live project"
          >
            <button className={`${classes.projectBtn} green`}>
              Live Project
            </button>
          </a>
        </h2>
        <div className={classes.contribution}>
          <ul>
            <li>Use OOP approach</li>
            <li>Design Planet Preserve Frontend</li>
            <li>
              Build Frontend with technologies React, Typescript, Tailwind, Css
            </li>
            <li>Configure React build using webpack</li>
            <li>Build login and sign up system</li>
            <li>Integrate google maps api</li>
            <li>Produce map markers and info from database data</li>
            <li>Implement site-wide routing ensuring SPA functionality</li>
            <li>Implement sorting and search functionality</li>
            <li>Ensure website is full responsive responsiveness</li>
            <li>Perform unit, integration, and system test (TDD)</li>
            <li>Implement Redux for state management</li>
          </ul>

          <ul>
            <li>Build Rest full API using Spring Framework and Spring Boot</li>
            <li>
              Configure Database entities and database query logic using JPA,
              Spring Data and Hibernate
            </li>
            <li>Secure restful api using Spring Security</li>
            <li>
              Add login & sign up logic to restful api also hashing password
            </li>
            <li>Implement Crud restful api routes</li>
            <li>Configure cors allowing connection to frontend</li>
            <li>Connect frontend to backend using async redux thunk</li>
            <li>Use axios to handle backend api calls</li>
            <li>Integrate MYSQL</li>
            <li>Create AWS RDS MYSQL Database</li>
            <li>Create demo account for easy interaction</li>
            <li>Ensure website is fully responsive</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PlanetPreserve;
