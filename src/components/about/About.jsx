import React from "react";
import "./about.css";
import ABOUTIMG from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TiFolderOpen } from "react-icons/ti";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ABOUTIMG} alt="about-image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about-card">
              <TiFolderOpen className="about-icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Hello! I am Jeko and I'm happy to share little information about
            myself. In the realm of web development, where innovation and
            creativity flourish, I, am a passionate and motivated individual
            ready to embark on new challenges. At the tender age of 20, I bring
            a youthful energy and a burning desire to excel in the field. Driven
            by a relentless pursuit of excellence, I approach every task with
            unwavering determination, fueled by the belief that no goal is too
            lofty to achieve. As a team player, I thrive in collaborative
            environments, actively engaging in meetings and embracing the power
            of collective intelligence. Drawing upon my strong project planning
            and organizational skills, I meticulously strategize to ensure
            seamless execution and deliver results that exceed expectations
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
