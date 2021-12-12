import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>

      <div className="about-text">
        <h2>ABOUT US</h2>
        <p>
        We are India's most trusted and transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us.
        </p>

        <button><a href="https://play.google.com/store">{props.button}</a></button>
      </div>
    </div>
  );
}

export default About;
