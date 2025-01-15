import React from "react";
import "./work-experience.css";
import { MdOutlineFlagCircle } from "react-icons/md";

const Experience = () => {
  return (
    <section id="workexperience">
      <h5>Jobs that I had/have</h5>
      <h2>My Work Experience</h2>

      <div className="container work-experience-container">
        <div className="work-experience">
          <h3>Web Development</h3>
          <div className="work-experience-content">
            <article className="work-experience-details">
              <MdOutlineFlagCircle className="work-experience-details-icon" />
              <div>
                <h4>Simple Steps (2022-2024)</h4>
                <small className="text-light">
                  Web Developer <br />
                </small>
                <small className="text-light">
                  Working with{" "}
                  <strong>HTML, CSS, JavaScript, React, Wordpress</strong>
                </small>
              </div>
            </article>
            <article className="work-experience-details">
              <MdOutlineFlagCircle className="work-experience-details-icon" />
              <div>
                <h4>CryptonBets (2024-Present)</h4>
                <small className="text-light">
                  Frontend Developer <br />
                </small>
                <small className="text-light">
                  Working with <strong>Vue JS, CSS, Bootstrap</strong>
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
