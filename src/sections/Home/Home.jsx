import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id='home' className="home">
            <img className='avatar' src="../../public/images/avatar3.png" alt="" />
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