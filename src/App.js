import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutPage from './pages/aboutPage.jsx';
import ProjectsPage from './pages/projectsPage.jsx';
import Contact from './components/Contact.jsx';
import packagejson from '../package.json';

function App() {
  return (
    <Router basename={packagejson.homepage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
