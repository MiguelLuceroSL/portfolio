import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <article className="about-content">
        <h2>Sobre mí</h2>
        <p className='pSecond'>
        Hola, soy Miguel Lucero, desarrollador fullstack en formación con una gran pasión por la tecnología y la programación. Actualmente estoy finalizando la carrera de Tecnicatura Universitaria en Desarrollo de Software. Me encanta mantenerme en constante aprendizaje, explorando nuevas tecnologías, frameworks y buenas prácticas para construir soluciones sólidas, modernas y eficientes. Soy detallista, curioso y siempre busco mejorar en cada línea de código.
        </p>
      </article>
      <article className="about-content">
        <h2>¿Por qué yo?</h2>
        <p className='pSecond'>
          Disfruto trabajar en equipo, compartir ideas y aprender de los demás. Me considero una persona comprometida, colaborativa y con muchas ganas de crecer profesionalmente.
        </p>
      </article>
    </section>
  );
}

export default About;