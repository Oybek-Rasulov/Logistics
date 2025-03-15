import React from "react";
import assets from "../assets";

function OurMission() {
  return (
    <section className="our-mission">
      <div className="our-mission-container">
        {/* Left Section - Mission Content */}
        <div className="our-mission-main">
            <div className="header-box">Our Mission</div>
            <div className="mission-content">
            <div className="mission-text">
                <p>
                At As Cargo LLC, our mission is to deliver high-quality logistics 
                services that empower businesses with smooth and efficient supply 
                chain operations. We strive to build strong partnerships with our 
                clients by offering tailored solutions, ensuring timely deliveries, 
                and upholding the highest industry standards.
                </p>
            </div>
            </div>
        </div>

        {/* Right Section - Image */}
        <div className="mission-image">
          <img src={assets.ourmission} alt="Truck" className="truck-image" />
          <div className="experience-badge">6+ Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
