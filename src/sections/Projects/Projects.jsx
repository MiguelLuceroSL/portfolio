import React from 'react';
import './Projects.css';
import { motion } from "framer-motion";

const projects = [
    {
        title: 'BKN Shop',
        image: '../../public/images/bkn.jpg',
        description: 'Un e-commerce realizado con React, donde consumo la API fakestoreapi, hago uso del localstorage, entre otras cosas.',
        link: 'https://bknshop.vercel.app/',
    },
    {
        title: 'Agenda de Consultorios',
        image: '../../public/images/agencia.jpg',
        description: 'Sitio web para reservación de turnos médicos, usa login con JWT, vistas con Pug, db con MySQL y verifica las rutas.',
        link: 'https://example.com/project2',
    },
];

const Projects = () => {
    return (
        <motion.section
            className="about"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
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
        </motion.section>
    );
};

export default Projects;