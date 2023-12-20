/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/hero.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hallo I, am</h5>
        <h1>Shevabey Rahman</h1>
        <h5 className="text-li">FrontEnd Developer</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
