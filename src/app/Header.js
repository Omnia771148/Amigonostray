import React from 'react';
import './Header.css'; // Make sure to create a CSS file for styling
const logo = "/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="site-name">
        SNOW FIELD
      </div>
    </header>
  );
};

export default Header;