import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Content.scss';

import AvatarImage from '../styles/avatar.jpg';

function Content() {
  return (
    <header className="content">
      <nav className="content-tool">
        <div className="content-menu">
          <NavLink to="/about" className="nav-link">
            À Propos
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projets
          </NavLink>
          <img src={AvatarImage} alt="Avatar" className="avatar" />
        </div>
      </nav>
    </header>
  );
}

export default Content;
