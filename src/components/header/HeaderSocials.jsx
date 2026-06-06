import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/jeko-kharabadze/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/13Nephilimm" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/jeko_kharabadze/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
