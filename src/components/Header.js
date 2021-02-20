import React from "react";
import Typed from "react-typed";
import profile from "../circle-cropped.png";

const Header = () => {
  return (
    <>
      <div className="header-wraper">
        <div className="main-info">
          <img src={profile} className="photoProfile" />
          {/* <h1>Felix Higuera</h1> */}
          <h2>Web Developer</h2>
          <Typed
            className="typed-text"
            strings={[
              "Web Design",
              "Web Development",
              "Technical Support",
              "Software Development",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a
            id="contactMeButton"
            href="#textHawai"
            className=" btn-main-offer border border-light rounded "
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
