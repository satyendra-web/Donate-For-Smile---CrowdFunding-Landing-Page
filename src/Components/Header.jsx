import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        {" "}
        <h1>
          <span>India's Most Trusted &amp; </span>Transparent Crowdfunding
          Platform
        </h1>
        <p className="details">
          Make Tomorrows Meaningful; Extend A Helping Hand.
        </p>
        <a href="#features" className="cv-btn">
          Donate
        </a>
      </div>
    </div>
  );
}

export default Header;
