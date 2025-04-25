import { motion } from "framer-motion";
import '../../styles/Presentation.css'; // Asegúrate de tener este archivo CSS para los estilos

const Presentation = () => {

    return (
        <section className="home-section"> 
            <motion.article
                className="home-content"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>¡Hola, me llamo Miguel!</h1>
                <p className='pFirst'>
                    y soy Desarrollador Web Fullstack.
                </p>
            </motion.article>
        </section>


    );
};

export default Presentation;