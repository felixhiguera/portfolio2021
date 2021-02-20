import React from "react";
import logo from "../logoFelix.png";
import projects from "./Projects";
//REACT FONT AWESOME INPUT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import profile from "../circle-cropped.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-darki fixed-top ">
      <div className="container">
        <a className="navbar-brand logo-text" href="#">
          {/* <img className="logo" src={logo} alt="logo..." /> */}
          <h3 className="text-white ">Felix</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactMeButton">
                About me
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How work
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#textHawai">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
