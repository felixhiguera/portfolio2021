import React, { Fragment } from "react";
import imagen1 from "../background.jpg";
import cripto from "../criptoPage.PNG";
import blackjack from "../blackjack.PNG";
import platzi from "../platzi.PNG";

import countriesapi from "../countriesapi.PNG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <div class="bg-white pt-5">
        <div className="container " id="projects">
          <div className="row">
            <div className="col text-center ">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 ">
              <div className="card">
                <a
                  href="https://felixhiguera.github.io/mobileFirst/"
                  target="_blank"
                >
                  <img
                    src={cripto}
                    className="card-img-top"
                    alt="cripto page"
                  />
                </a>
                <div className="card-body">
                  <div class="badges mb-2">
                    <span class="badge bg-secondary">HTML</span>

                    <span class="badge bg-primary">CSS</span>
                    <span class="badge bg-warning">Javascript</span>
                  </div>
                  <h5 className="card-title">Cryptocurrency Website</h5>
                  <p className="card-text">
                    This modern and appealing website was built with ‘’Mobile
                    First’’ in mind. The main techniques are HTML5 and CSS3. The
                    branding matches this project s requirements.
                  </p>
                  <a
                    href="https://felixhiguera.github.io/mobileFirst/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobe} size="2x" color="blue" />
                  </a>
                  <a
                    href="https://github.com/felixhiguera/mobileFirst"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  src={blackjack}
                  className="card-img-top"
                  alt="BlackJack game"
                />
                <div className="card-body">
                  <div class="badges mb-2">
                    <span class="badge bg-secondary">HTML</span>

                    <span class="badge bg-primary">CSS</span>
                    <span class="badge bg-warning">Javascript</span>
                  </div>
                  <h5 className="card-title">BlackJack Game</h5>
                  <p className="card-text">
                    This modern and appealing website was built with ‘’Mobile
                    First’’ in mind. The main techniques are HTML5 and CSS3. The
                    branding matches this project s requirements.
                  </p>
                  <a
                    href="https://felixhiguera.github.io/blackjack/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobe} size="2x" color="blue" />
                  </a>
                  <a
                    href="https://github.com/felixhiguera/blackjack"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  src={countriesapi}
                  className="card-img-top "
                  alt="Countries API photo"
                />
                <div className="card-body">
                  <span class="badge bg-secondary">HTML</span>

                  <span class="badge bg-primary">CSS</span>
                  <span class="badge bg-light">API</span>
                  <span class="badge bg-warning">Javascript</span>

                  <h5 className="card-title">Countries API</h5>
                  <p className="card-text">
                    This modern and appealing website was built with ‘’Mobile
                    First’’ in mind. The main techniques are HTML5 and CSS3. The
                    branding matches this project s requirements.
                  </p>
                  <a
                    href="https://felixhiguera.github.io/countriesAPI/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobe} size="2x" color="blue" />
                  </a>
                  <a
                    href="https://github.com/felixhiguera/countriesAPI"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card selected">
                <img
                  src={platzi}
                  className="card-img-top"
                  alt="Platzi website"
                />
                <div className="card-body">
                  <div class="badges mb-2">
                    <span class="badge bg-secondary">HTML</span>

                    <span class="badge bg-purple">Bootstrap</span>
                  </div>
                  <h5 className="card-title">Platzi Conf Hawai</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, alias. Nemo ex aliquid reiciendis ipsa corporis ea
                    sapiente nobis possimus libero ab cupiditate consequuntur,
                    harum provident accusantium obcaecati porro? Vitae.
                  </p>
                  <a
                    href="https://felixhiguera.github.io/confhawai/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobe} size="2x" color="blue" />
                  </a>
                  <a
                    href="https://github.com/felixhiguera/confhawai"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
