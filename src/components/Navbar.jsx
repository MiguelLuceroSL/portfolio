import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const links = [
        { to: "about", label: "Sobre mí" },
        { to: "tech", label: "Tecnologías" },
        { to: "projects", label: "Proyectos" },
        { to: "contact", label: "Contacto" },
    ];

    return (
        <nav className={`text-white bg-[#03142e] w-full z-50 top-0 flex justify-center h-[6rem] items-center md:h-[8rem] md:px-8 lg:px-10 md:py-6 lg:flex-row transition-all duration-300 ease-in-out ${isOpen ? 'flex-col gap-[1rem] h-[25rem] md:h-[35rem]' : 'flex-row gap-[12rem] md:h-[8rem] md:gap-0 md:justify-between'}`}>
            <article className="navbar-logo">
                <Link to="home" smooth={true} duration={500}>
                    {/*<h1 className={`text-white text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] md:w-[15.8rem] lg:w-[20rem] xl:w-[25rem] ${isOpen ? 'mb-[2rem] text-[2.5rem]' : ''}`}>Miguel Lucero</h1> */}
                    <img src="../img/ML2.png" alt="logoml" className="object-cover h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] lg:h-[4rem] cursor-pointer" />
                </Link>
            </article>
            {!isOpen && (
                <article className="lg:hidden w-10 flex flex-col cursor-pointer gap-1" onClick={toggleMenu}>
                    <p className="bar w-10 h-1 bg-white mb-1"></p>
                    <p className="bar w-10 h-1 bg-white mb-1"></p>
                    <p className="bar w-10 h-1 bg-white"></p>
                </article>
            )}
            <ul className="hidden lg:flex gap-8">
                {links.map(({ to, label }) => (
                    <li key={to}>
                        <Link to={to} smooth={true} duration={500} className="cursor-pointer md:text-[1.2rem] lg:text-[1.5rem] hover:text-[#00bcd4] transition-all duration-300 ease-in-out">  
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            {isOpen && (
                <ul className="flex flex-col items-center bg-[#03142e] lg:hidden gap-6 pb-6 text-lg">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to} smooth={true} duration={500} onClick={toggleMenu}  className="cursor-pointer">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {isOpen && (
                <div className="lg:hidden cursor-pointer w-6 h-6 relative" onClick={toggleMenu}>
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