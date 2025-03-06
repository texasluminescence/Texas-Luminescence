import React from 'react';
import Logo from '../../Components/Logo';
import Mission from '../../Components/Mission';
import Departments from '../../Components/Departments';
import WhyJoin from '../../Components/WhyJoin';
import OfficerBoard from '../../Components/OfficerBoard';
import Footer from '../../Components/Footer';
import './home.css';

function App() {
  return (
    <div className="app-container">
      <Logo />
      <Mission />
      <Departments />
      <WhyJoin />
      <OfficerBoard />
      <Footer />
    </div>
  );
}

export default App;