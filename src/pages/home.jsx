import React from 'react';
import Banner from '../components/Banner.jsx'
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";
import '../styles/Home.scss';


function Home() {
    return (
      <div className='home-main'>
          <div className='home-container'>
            <Banner />
            <Content />
        </div>
        <Footer /> 
      </div>
    )
  }

export default Home;
