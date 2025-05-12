import React from "react";
import "./WhyMe.css";
import { motion } from "framer-motion";

function WhyMe() {
  return (
    <motion.section
      className="aboutMe"
      id="aboutMe"
      initial={{ scale: 0.8 , opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <section id="about" className="about-section">
        <article className="about-content">
          <h2>¿Por qué yo?</h2>
          <p className='pSecond p'>
          Disfruto trabajar en equipo, compartir ideas y aprender de los demás. Me considero una persona comprometida, proactiva y con una fuerte orientación a la mejora continua. Valoro la comunicación, la colaboración y el respeto en el entorno laboral. Siempre busco aportar lo mejor de mí en cada proyecto, con entusiasmo y muchas ganas de crecer profesionalmente.
          </p>
        </article>
      </section>
    </motion.section>
  );
}

export default WhyMe;