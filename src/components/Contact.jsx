import React from 'react';
import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';
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
              <i className="fas fa-phone-alt"></i>
              06 95 19 80 29
            </div>
            <a href="mailto:caroline.sclavon@gmail.com">
              <i className="fas fa-envelope"></i>
              caroline.sclavon@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/caroline-sclavon-4ab778223" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
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
