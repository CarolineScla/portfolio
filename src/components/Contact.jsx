import React from 'react';
import { IconButton } from '@mui/material';
import { MailOutline, LinkedIn, Phone } from '@mui/icons-material'; 
import Footer from "../components/Footer.jsx";
import Banner from '../components/Banner.jsx'
import '../styles/Contact.scss';

function Contact() {
  return (    
    <div className="contact">
      <Banner />
      <div className="contact-container">
        
        <div className="contact-info">
          <h1>Informations de contact</h1>
          <div className="contact-links">
          <div className="phone-number">
              <IconButton>
                <Phone /> 
              </IconButton>
              06 95 19 80 29
            </div>
            <a href="mailto:caroline.sclavon@gmail.com">
              <IconButton>
                <MailOutline />
              </IconButton>
              caroline.sclavon@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/caroline-sclavon-4ab778223" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <LinkedIn />
              </IconButton>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
