import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer pt-4  mt-5 bg-darki">
      <h2>Social Media</h2>
      <div className="footer-icons pb-3">
        <a href="https://github.com/felixhiguera/" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/felix-edmundo-higuera-alonso-8605a9ba/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
