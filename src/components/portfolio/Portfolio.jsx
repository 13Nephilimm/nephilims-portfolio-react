import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio9.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio3.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio5.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simple Steps",
    description: "Simple Steps official website with React JS",
    github: "https://github.com/13Nephilimm/Simple-Steps-React-Website",
    demo: "https://simplestepss.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Nichateau",
    description: "Wine restaurant official website with Wordpress, JS and CSS",
    github: "#",
    demo: "https://nichateau.ge",
  },
  {
    id: 3,
    image: IMG3,
    title: "Casino CryptonBets",
    description: "Crypto casino website with Vue JS",
    github: "https://github.com/mrikaponka/crypton-front",
    demo: "https://cryptonbets.com/",
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
    title: "Fanaskerteli",
    description: "Education website with Wordpress, JS and CSS",
    github: "#",
    demo: "https://fanaskerteli.edu.ge",
  },
  {
    id: 6,
    image: IMG6,
    title: "Gamezy",
    description: "TBC x USAID Course final project with Next JS",
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
    title: "Affiliate Cryptonbets",
    description: "Affiliate Panel for Cryptonbets with Vue JS",
    github: "https://github.com/13Nephilimm/affiliate",
    demo: "https://affiliate.cryptonbets.com/",
  },
  {
    id: 9,
    image: IMG9,
    title: "FC Barcelona",
    description: "Barca's fan webpage with HTML, CSS, JavaScript",
    github: "https://github.com/13Nephilimm/FC-Barcelona-website",
    demo: "https://nephilims-barca.netlify.app",
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
        <a
          className="see-more-portfolio"
          href="https://github.com/13Nephilimm?tab=repositories"
          target="_blank"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default portfolio;
