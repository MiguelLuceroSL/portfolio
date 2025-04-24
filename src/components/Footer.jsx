import React from 'react';
import '../styles/Footer.css'; // Asegúrate de tener este archivo CSS para los estilos
import { Link } from 'react-scroll'; // Importa Link desde react-scroll si lo necesitas

const Footer = () => {


    return (
        <footer id="footer">
            <p className='text'>
                © {new Date().getFullYear()} Miguel Roque Roberto Lucero. Todos los derechos reservados.
            </p>
            <div className='social-links'>
                <a className='links' href="https://github.com/MiguelLuceroSL" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a className='links' href="https://www.linkedin.com/in/lucero-roque-roberto-miguel-2122bb251/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};
export default Footer;

