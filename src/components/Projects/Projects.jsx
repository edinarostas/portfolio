import React from 'react';
import './Projects.scss';

const projects = [
  { title: "Finance First", description: "a personal finance tracking app to help users manage their finances with ease.", link: "https://financefirst.app" },
  { title: "ScamShield", description: "an advanced machine learning tool designed for messaging platforms, integrated within a mockup re-commerce storefront.", link: "https://github.com/edinarostas/ScamShield-Frontend" },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

