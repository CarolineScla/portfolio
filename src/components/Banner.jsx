import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Banner.scss';

function Banner() {
  return (
    <AppBar position="static" className="banner" sx={{ backgroundColor: '#FFC0CB' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" className="nav-link">
            Caroline Sclavon - Web Developer Junior
          </NavLink>
        </Typography>
        <div className="banner-menu">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            component={NavLink}
            to="/contact"
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Banner;
