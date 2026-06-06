import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { frontendSkills, backendSkills, gameDevSkills } from "../../data/skillsData";

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up">
      <h5>Skills that I have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {frontendSkills.map(({ name, level }) => (
              <article className="experience-details" key={name}>
                <BsFillPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{name}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            {backendSkills.map(({ name, level }) => (
              <article className="experience-details" key={name}>
                <BsFillPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{name}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-gamedev">
          <h3>Game Development</h3>
          <div className="experience-content">
            {gameDevSkills.map(({ name, level }) => (
              <article className="experience-details" key={name}>
                <BsFillPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{name}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
