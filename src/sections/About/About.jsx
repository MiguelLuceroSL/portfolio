import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about-about"
      initial={{ scale: 0.8 , opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <section id="about" className="about-section">
        <article className="about-content">
          <h2>Sobre mí</h2>
          <p className='pSecond p'>
            Hola, soy Miguel Lucero, desarrollador fullstack en formación con una gran pasión por la tecnología y la programación. Actualmente estoy finalizando la carrera de Tecnicatura Universitaria en Desarrollo de Software. Me encanta mantenerme en constante aprendizaje, explorando nuevas tecnologías, frameworks y buenas prácticas para construir soluciones sólidas, modernas y eficientes. Soy detallista, curioso y siempre busco mejorar en cada línea de código.
          </p>
        </article>
      </section>
    </motion.section>
  );
}

export default About;