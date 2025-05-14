import React from 'react';
import './Projects.css';
import { motion } from "framer-motion";

const projects = [
    {
        title: 'BKN Shop',
        image: '../../public/images/bkn.jpg',
        description: 'Un e-commerce realizado con React, donde consumo la API fakestoreapi, uso el localstorage y el estilo con tailwind.',
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
            className="flex flex-col items-center justify-center w-full h-full py-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <section id="projects" className="flex flex-col items-center justify-start w-full h-full p-[2rem] gap-[2.5rem] text-center">
                <h2 className='fuente-ubuntu text-[2.5rem] sm:text-[3rem] font'>Mis Proyectos</h2>
                <div className="flex flex-wrap justify-center items-center gap-[2rem] w-full h-full">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card flex flex-col justify-center items-center text-center w-[400px] bg-[#03142e] p-[1.5rem]">
                            <img src={project.image} alt={project.title} className="w-[350px] h-auto mb-[20px]" />
                            <h3 className='fuente-ubuntu text-[1.5rem]'>{project.title}</h3>
                            <p className='fuente-ubuntu max-w-[300px] text-[1rem]'>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='a-pr text-[1rem] text-[#fff] bg-[#0073e6] hover:bg-[#005bb5]'>
                                <span className='fuente-ubuntu text-[#f0f0f0]'>Ver proyecto</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </motion.section>
    );
};

export default Projects;