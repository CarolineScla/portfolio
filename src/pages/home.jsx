import React from 'react';
import Banner from '../components/Banner.jsx'
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";
import '../styles/Home.scss';


function Home() {
    return (
      <div className='container'>
          <div className='main_conatiner'>
            <Banner />
            <Content />
        </div>
        <Footer /> 
      </div>
    )
  }

export default Home;
