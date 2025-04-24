import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'; // Optional: Add your CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <article className="navbar-logo">
                <Link to="home" smooth={true} duration={500}>
                    <h1>Miguel Lucero</h1>
                </Link>
            </article>
            <ul className="navbar-links">
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        sobre mí
                    </Link>
                </li>
                <li>
                    <Link to="tech" smooth={true} duration={500}>
                        tecnologías
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        projectos
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;