import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`text-white bg-[#03142e] w-full z-50 top-0 flex justify-center h-[5rem] items-center md:px-8 lg:px-10 md:py-6 md:flex-row transition-all duration-300 ease-in-out ${isOpen ? 'flex-col gap-[2rem]' : 'flex-row gap-[12rem] md:gap-0 md:justify-between'}`}>
            <article className="navbar-logo">
                <Link to="home" smooth={true} duration={500}>
                    <h1 className='text-white text-[3rem] md:text-[2rem]'>Miguel Lucero</h1>
                </Link>
            </article>
            {!isOpen && (
                <article className="md:hidden w-10 flex flex-col cursor-pointer gap-1" onClick={toggleMenu}>
                <p className="bar w-10 h-1 bg-white mb-1"></p>
                <p className="bar w-10 h-1 bg-white mb-1"></p>
                <p className="bar w-10 h-1 bg-white"></p>
            </article>
            )}
            <ul className="hidden md:flex gap-8 text-lg">
                <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">sobre mí</Link></li>
                <li><Link to="tech" smooth={true} duration={500} className="cursor-pointer">tecnologías</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">proyectos</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">contacto</Link></li>
            </ul>

            {isOpen && (
                <ul className="flex flex-col items-center bg-[#03142e] md:hidden gap-6 pb-6 text-lg">
                    <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer">sobre mí</Link></li>
                    <li><Link to="tech" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer">tecnologías</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer">proyectos</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer">contacto</Link></li>
                </ul>
            )}
            {isOpen && (
                <div className="md:hidden cursor-pointer w-6 h-6 relative" onClick={toggleMenu}>
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300 
                    ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300 
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300 
                    ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
                />
              </div>
            )}
        </nav>
    );
};

export default Navbar;