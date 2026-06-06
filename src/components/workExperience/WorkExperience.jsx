import React from "react";
import "./work-experience.css";
import { MdOutlineFlagCircle } from "react-icons/md";
import { workHistory } from "../../data/workData";

const WorkExperience = () => {
  return (
    <section id="workexperience" data-aos="fade-up">
      <h5>Jobs that I had/have</h5>
      <h2>My Work Experience</h2>

      <div className="container work-experience-container">
        <div className="work-experience">
          <h3>Web Development</h3>
          <div className="work-experience-content">
            {workHistory.map(({ id, company, period, role, stack }) => (
              <article className="work-experience-details" key={id}>
                <MdOutlineFlagCircle className="work-experience-details-icon" />
                <div>
                  <h4>{company} ({period})</h4>
                  <small className="text-light">
                    {role} <br />
                  </small>
                  <small className="text-light">
                    Working with <strong>{stack}</strong>
                  </small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
