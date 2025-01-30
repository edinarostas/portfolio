import React, { useState } from 'react';
import FinanceFirstCover from '../../assets/images/FinanceFirst_cover_photo.png';
import ScamShieldCover from '../../assets/images/ScamShield_cover_photo.png';
import './Projects.scss';

const projects = [
  { 
    title: "Finance First", 
    description: "Originally developed for personal use based on an Excel spreadsheet I created years ago, Finance First is a comprehensive personal finance tracking application. It supports multiple accounts, categories, and currencies, with customizable statement uploads based on different bank formats.", 
    techStack: "JavaScript, HTML5, CSS, React.js, Node.js, Express.js, JSON Web Token (JWT), MySQL, REST APIs, Amazon Cognito, Amazon Web Services (AWS), Amazon Dynamodb", 
    techStackHashtags: "#JavaScript, #HTML5, #CSS, #React.js, #Node.js, #Express.js, #JWT, #MySQL, #REST APIs,  #Amazon Cognito, #AWS, #Dynamodb", 
    link: "https://financefirst.app", 
    coverImage: FinanceFirstCover 
  },
  { 
    title: "ScamShield", 
    description: "An advanced machine learning tool designed for messaging platforms, integrated within a mockup re-commerce storefront.", 
    techStack: "JavaScript, HTML5, CSS, React.js, Node.js, Express.js, JSON Web Token (JWT), OpenAI API" ,
    techStackHashtags: "#JavaScript, #HTML5, #CSS, #React.js, #Node.js, #Express.js, #JWT, #OpenAI API", 
    link: "https://github.com/edinarostas/ScamShield-Frontend", 
    coverImage: ScamShieldCover
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (index) => {
    setActiveProject(index === activeProject ? null : index);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">My Projects</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${activeProject === index ? 'active' : ''}`} 
            onClick={() => handleProjectClick(index)}
          >
            <div className="project-card__image-wrapper">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="project-card__image" 
              />
              <div className="project-card__overlay">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__tech-stack-overlay">{project.techStackHashtags}</p>
              </div>
            </div>
            {activeProject === index && (
              <div className="project-card__details">
                <p className="project-card__description">{project.description}</p>
                <p className="project-card__tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
                <a 
                  href={project.link} 
                  className="project-card__link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
