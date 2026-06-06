import React from "react";
import "./portfolio.css";
import portfolioData from "../../data/portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio" data-aos="fade-up">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {portfolioData.map((obj) => (
          <article className="portfolio-item" key={obj.id}>
            <div className="portfolio-item-image">
              <img src={obj.image} alt={obj.title} />
              <div className="portfolio-item-overlay">
                {obj.github && (
                  <a href={obj.github} className="btn" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                )}
                <a href={obj.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
            <div className="info-box">
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          </article>
        ))}
        <a
          className="see-more-portfolio"
          href="https://github.com/13Nephilimm?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
