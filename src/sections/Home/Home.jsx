import React from 'react';
import './Home.css';
import Picture from './Picture';

const Home = () => {
    return (
        <section id='home' className="home">
            <Picture />
            <article className="home-content">
                <h1>¡Hola, me llamo Miguel!</h1>
                <p className='pFirst'>
                    y soy Desarrollador Web Fullstack.
                </p>
            </article>
        </section>
    );
};

export default Home;