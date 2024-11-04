import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simple Steps",
    description: "Simple Steps official website",
    github: "https://github.com/13Nephilimm/Simple-Steps-React-Website",
    demo: "https://simplesteps.ge",
  },
  {
    id: 2,
    image: IMG2,
    title: "Nichateau",
    description: "Wine restaurant official website",
    github: "#",
    demo: "https://nichateau.ge",
  },
  {
    id: 3,
    image: IMG3,
    title: "Fanaskerteli",
    description: "Education website using Wordpress, JS and CSS",
    github: "#",
    demo: "https://fanaskerteli.edu.ge",
  },
  {
    id: 4,
    image: IMG4,
    title: "Odahouse",
    description: "Real estate website with Wordpress",
    github: "#",
    demo: "https://odahouse.ge/",
  },
  {
    id: 5,
    image: IMG5,
    title: "FC Barcelona",
    description: "Barca's fan webpage with HTML, CSS, JavaScript",
    github: "https://github.com/13Nephilimm/FC-Barcelona-website",
    demo: "https://nephilims-barca.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Gamezy",
    description: "TBC x USAID Course final project using Next JS",
    github: "https://github.com/13Nephilimm/tbc-app",
    demo: "https://tbc-app-13nephilimms-projects.vercel.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "ValorApp",
    description: "Valorant Appication with React and Framer Motion",
    github: "https://github.com/13Nephilimm/Valorapp",
    demo: "https://nephilims-valorapp.netlify.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Map App",
    description: "Map app for sports exercises",
    github: "https://github.com/13Nephilimm/Map-application-JS",
    demo: "https://13nephilimm.github.io/Map-application-JS/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Memory Game",
    description: "Memory Game with React",
    github: "https://github.com/13Nephilimm/react-memory-game",
    demo: "https://nephilim-memory-game.netlify.app/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map((obj) => {
          return (
            <article className="portfolio-item" key={obj.id}>
              <div className="portfolio-item-image">
                <img src={obj.image} alt="project-image" />
              </div>
              <div className="info-box">
                <h3>{obj.title}</h3>
                <p>{obj.description}</p>
              </div>
              <div className="portfolio-item-cta">
                <a href={obj.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={obj.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
