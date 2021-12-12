import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
        <h3>Feed The Hungry, Feed Your Soul.</h3>
      <div className="a-container">
        <FeatureBox image={featureimage} title="Floods Ravage Andhra Pradesh" />
        <FeatureBox image={featureimage2} title="No Child Hungry" />
        <FeatureBox image={featureimage1} title="Injured Stray Dogs" />
        
      </div>
      
    </div>
  );
}

export default Feature;
