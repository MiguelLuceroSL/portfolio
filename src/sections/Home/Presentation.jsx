import { motion } from "framer-motion";
import "../../styles/Presentation.css";

const Presentation = () => {

    return (
        <section className="home-section">
            <motion.article
                className="flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="font text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">¡Hola, me llamo Miguel!👋
                    <br />
                    <span className="text-[#c4c4c4] text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">Soy Desarrollador Web Fullstack.</span>
                    <a href="/cvluceromiguel.pdf" target="_blank">Ver mi CV</a>
                </h1>
                
            </motion.article>

        </section>
        
    );
};

export default Presentation;