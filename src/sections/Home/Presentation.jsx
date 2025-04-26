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
                <h1>¡Hola, me llamo Miguel!</h1>
                <p className='pFirst'>
                    y soy Desarrollador Web Fullstack.
                </p>
            </motion.article>
        </section>


    );
};

export default Presentation;