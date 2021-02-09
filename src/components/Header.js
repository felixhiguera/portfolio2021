import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <>
      <div className="header-wraper">
        <div className="main-info">
          <h1>Frontend Developer</h1>
          <Typed
            className="typed-text"
            strings={[
              "Web Design",
              "Web Development",
              "Technical Support",
              "Networking",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="#" className=" btn-main-offer border border-dark rounded">
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
