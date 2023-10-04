import React from 'react';
import '../styles/About.scss';
import About from '../components/About.jsx';
import Banner from '../components/Banner.jsx';
import Footer from "../components/Footer.jsx";


function AboutPage() {
    return (
      <div className='about_main'>
          <div className='about-conatiner'>
            <Banner />
            <About />
        </div>
        <Footer /> 
      </div>
    )
  }

export default AboutPage;
