import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'BKN Shop',
        image: '../../public/images/bkn.jpg',   
        description: 'Un e-commerce realizado con React, donde consumo la API fakestoreapi, hago uso del localstorage, entre otras cosas.',
        link: 'https://bknshop.vercel.app/',
    },
    {
        title: 'Proyecto 2',
        image: '../../public/images/bkn.jpg',
        description: 'Description of project 2.',
        link: 'https://example.com/project2',
    },
    {
        title: 'Proyecto 3',
        image: '../../public/images/bkn.jpg',
        description: 'Description of project 3.',
        link: 'https://example.com/project3',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Mis Proyectos</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className='title'>{project.title}</h3>
                        <p className='description'>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <span className='view-project'>Ver proyecto</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;