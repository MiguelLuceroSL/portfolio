import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1.',
        link: 'https://example.com/project1',
    },
    {
        title: 'Project 2',
        description: 'Description of project 2.',
        link: 'https://example.com/project2',
    },
    {
        title: 'Project 3',
        description: 'Description of project 3.',
        link: 'https://example.com/project3',
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;