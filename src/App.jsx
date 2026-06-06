import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import WorkExperience from "./components/workExperience/WorkExperience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
