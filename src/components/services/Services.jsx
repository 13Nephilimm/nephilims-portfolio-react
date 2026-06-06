import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services" data-aos="fade-up">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Fully Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Modern & User Friendly Web Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Best Practices</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Build Websites From The Scratch</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Modern Technologies Like React, Express & Etc.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Basic Websites With Wordpress</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Bring Your Imagination To Life</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Game Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Browser-Based 2D Games</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Pixi.js — High Performance Rendering</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Phaser.js — Game Framework</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Interactive Web Experiences</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
