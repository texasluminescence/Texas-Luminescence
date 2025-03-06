import React from 'react';
import logo from '../Assets/dashboard_image/dashboard_design.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Texas Luminescence Logo" className="logo-image" />
    </div>
  );
};

export default Logo;