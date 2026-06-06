import React from "react";
import "./about.css";
import ABOUTIMG from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TiFolderOpen } from "react-icons/ti";

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
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
              <small>4+ Years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>25+ Worldwide</small>
            </article>
            <article className="about-card">
              <TiFolderOpen className="about-icon" />
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>
          </div>

          <p>
            I'm Jeko, a web developer based in Georgia with 4+ years of
            professional experience. I've worked across the full frontend
            stack — React, Vue.js, Next.js — and shipped real products for
            companies ranging from marketing agencies to crypto betting
            platforms. Currently at CrocoBet as an Application Support
            Specialist, working with Grafana, Docker, Prometheus, and Zipkin
            to monitor production systems at scale. I enjoy writing clean,
            maintainable code and building things that users actually enjoy
            using.
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
