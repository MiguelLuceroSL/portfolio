import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'; // Optional: Add your CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <article className="navbar-logo">
                <Link to="home" smooth={true} duration={500}>
                    <h1>Miguel Lucero</h1>
                </Link>
            </article>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li>
                    <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
                        sobre mí
                    </Link>
                </li>
                <li>
                    <Link to="tech" smooth={true} duration={500} onClick={toggleMenu}>
                        tecnologías
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
                        proyectos
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                        contacto
                    </Link>
                </li>
            </ul>
            <article className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </article>
        </nav>
    );
};

export default Navbar;