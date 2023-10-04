import React from 'react';
import './ProjectList.css'; 

// Composant Project qui affiche une carte pour chaque projet
const Project = ({ title, description, githubLink }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        Voir sur GitHub
      </a>
    </div>
  );
};

// Composant principal qui affiche tous les projets
const ProjectList = () => {
  const projects = [
    {
      title: 'HTML et CSS - Création du site de réservation',
      description: 'Développement du Frontend d\'un site web de réservation de logement et intégration d\'une maquette depuis Figma',
      githubLink: 'https://github.com/CarolineScla/CarolineScla-P2-Creation-site-Booki',
    },
    {
      title: 'JavaScript - Créez une page web dynamique',
      description: 'Création d\'une page web interactive visant à enrichir les fonctionnalités d\'un portfolio pour une architecte d\'intérieur. Ces fonctionnalités incluent la récupération de projets depuis le backend, la possibilité d\'ajouter et de supprimer des projets, ainsi que des fonctionnalités de gestion de la connexion utilisateur.',
      githubLink: 'https://github.com/CarolineScla/Portfolio-architecte-sophie-bluel',
    },
    {
      title: 'Débuggez et optimisez un site de photographe',
      description: 'J\'ai effectué une analyse approfondie, un débogage méticuleux et une optimisation complète d\'un site web de photographe préexistant. Mon travail a été étayé par un rapport d\'intervention détaillé. J\'ai utilisé divers outils professionnels, notamment Lighthouse et Wave, pour évaluer et améliorer l\'optimisation des moteurs de recherche (SEO) et les performances globales du site.',
      githubLink: 'https://github.com/CarolineScla/De-buggez-et-optimisez-un-site-de-photographe',
    },
    {
      title: 'React - Créer une application de location immobilière',
      description: 'Conception et développement d\'une application web de location immobilière en utilisant React. Le projet inclut des fonctionnalités de recherche, de filtres et d\'affichage de listes de biens immobiliers.',
      githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1',
    },
    {
      title: 'Node.js - Développez le back-end d un site de notation de livres',
      description: 'Pour le développement du back-end d\'un site web de notation de livres, j\'ai utilisé Node.js et mis en place une architecture CRUD. Ce projet a englobé la création d\'un serveur Express, la gestion d\'une base de données MongoDB, la mise en œuvre de l\'authentification des utilisateurs et l\'exposition d\'API pour les fonctionnalités CRUD.',
      githubLink: 'https://github.com/CarolineScla/Mon_Vieux_Grimoire',
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project
          key={index} // Utilisez une clé unique pour chaque carte
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
