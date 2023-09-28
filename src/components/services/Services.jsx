import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
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
              <p>Basic Webistes With Wordpress</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Bring Your Imagination To Life</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Simple Video Editing</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Content Ideas For Youtube Videos</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Great Practices To Make Your Lonkedin Profile Awesome</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
