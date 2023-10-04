import React from 'react';
import Banner from '../components/Banner.jsx'
import Footer from "../components/Footer.jsx";
import Projects from '../components/Projects.jsx';
import '../styles/Projects.scss';




function ProjectsPage() {
    return (
      <div className='projects'>
          <div className='projects_conatiner'>
            <Banner />
            <Projects />
        </div>
        <Footer /> 
      </div>
    )
  }

export default ProjectsPage;
