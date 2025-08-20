import React from 'react';
import logo from "../assets/dashboard_image/dashboard_design.png"

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src= {logo}
        alt="Texas Luminescence Logo"
        className="logo-container"
      />
    </div>
  );
};

export default Logo;
