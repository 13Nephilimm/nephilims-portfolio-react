import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Jax
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#workexperience">Work Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          href="https://www.facebook.com/xarabadzejeko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/jeko_kharabadze/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UC2hB6E3IQMBgHoqksBRugKg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
      </div>

      <div className="footer-copyright">
        <small>
          {new Date().getFullYear()} &copy; Website by Jax. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
