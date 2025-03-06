import React from 'react';
import './home.css';
import dashboardImage from '../../Assets/dashboard_image/dashboard_design.png';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img src={dashboardImage} alt="Dashboard Design" className="dashboard-image" />
    </div>
  );
};

export default Dashboard;