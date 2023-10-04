import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Banner.scss';

function Banner() {
  return (
    <div className="banner">
      <nav className="navbar" style={{ backgroundColor: '#FFC0CB' }}>
        <div className="navbar-brand">
          <NavLink to="/" className="nav-link">
            Caroline Sclavon - Web Developer Junior
          </NavLink>
        </div>
        <div className="navbar-menu">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Banner;
