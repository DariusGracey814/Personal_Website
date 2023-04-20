import React from "react";
import { Link } from "react-router-dom";
import classes from "./HerbalStoner.module.css";
import image from "../Assets/extracts_pagge.png";

function HerbalStoner() {
  return (
    <section className={classes["herbal-section"]}>
      <div className={classes["goBack-wrapper"]}>
        <Link to="/home" className={`${classes.goBack} green`}>
          Go Back
        </Link>
      </div>

      <h1 className={classes["herbal-h1"]}>
        Herbal Stoners &mdash; FullStack Project
      </h1>
      <div className={classes.imageWrapper}>
        <img
          src={image}
          alt="herbal stoner extract page screenshot"
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
            title="herbal stoners live project"
          >
            <button className={`${classes.projectBtn} green`}>
              Live Project
            </button>
          </a>
        </h2>
        <div className={classes.contribution}>
          <ul>
            <li>Design Herbal Stoners Frontend</li>
            <li>Build Frontend with React, Bootstrap, Css</li>
            <li>Build re-useable components</li>
            <li>Integrate google maps api</li>
            <li>Implement site-wide routing ensuring SPA functionality</li>
            <li>Use OOP approach</li>
            <li>Fetch and alter data from Otreeba API</li>
            <li>Configure and manage cart using react context</li>
            <li>Implement logic to add and delete cart products</li>
            <li>
              Configure cart session storage saving existing user cart data
            </li>
            <li>Configure date context managing open & closing times</li>
            <li>Implement Product sorting</li>
          </ul>

          <ul>
            <li>Integrate stripe for user checkout</li>
            <li>Build express Api for stripe checkout functionality</li>
            <li>Add Site products to stripe account</li>
            <li>Match user cart products with stripe price_id</li>
            <li>return customer stripe checkout url</li>
            <li>Generate success and cancel stripe url</li>
            <li>Perform Unit and Integration tests (TDD)</li>
            <li>Connect Frontend to Backend</li>
            <li>Deploy Frontend to Firebase</li>
            <li>Deploy Backend Express Api to Render</li>
            <li>Ensure website is fully responsive</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HerbalStoner;
