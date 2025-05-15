import { motion } from "framer-motion";
import "../../styles/Presentation.css";
import CV from "../../../cv.pdf";

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
                    <br />
                    <a className="text-[#00bcd4] text-[0.5rem] sm:text-[1rem] md:text-[1.5rem]" href={CV} target="_blank">
                        <button className="bg-[#00bcd4] text-white rounded-md px-4 py-2 mt-4 hover:bg-[#008c9e] hover:cursor-pointer transition duration-300">
                            Descargar mi CV    
                        </button>
                    </a>
                </h1>
                
            </motion.article>

        </section>
        
    );
};

export default Presentation;