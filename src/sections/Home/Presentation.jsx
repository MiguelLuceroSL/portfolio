import { motion } from "framer-motion";
import '../../styles/Presentation.css'; // Asegúrate de tener este archivo CSS para los estilos

const Presentation = () => {

    return (
        <section className="home-section"> 
            <motion.article
                className="home-content"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="typewriter text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] p-4">¡Hola, me llamo Miguel!👋
                    <br />
                    <span className="typewriter-text">Soy Desarrollador Web Fullstack.</span>
                </h1>
            </motion.article>
        </section>
    );
};

export default Presentation;