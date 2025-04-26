import React from "react";
import "../About/About.css";
import { motion } from "framer-motion";

function WhyMe() {
  return (
    <motion.section
      className="about"
      initial={{ scale: 0.8 , opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <section id="about" className="about-section">
        <article className="about-content">
          <h2>¿Por qué yo?</h2>
          <p className='pSecond'>
            Disfruto trabajar en equipo, compartir ideas y aprender de los demás. Me considero una persona comprometida, colaborativa y con muchas ganas de crecer profesionalmente.
          </p>
        </article>
      </section>
    </motion.section>
  );
}

export default WhyMe;