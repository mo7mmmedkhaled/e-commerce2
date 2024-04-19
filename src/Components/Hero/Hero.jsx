import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-lift">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>New</p>
        <p>Collection</p>
        <p>For Everyone</p>
        <div className="div-button">
          <a href="#latestCollection">
            <button>Latest Collection</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
