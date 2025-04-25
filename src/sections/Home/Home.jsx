import React from 'react';
import './Home.css';
import Picture from './Picture';
import Presentation from './Presentation';

const Home = () => {
    return (
        <section id='home' className="home">
            <Picture />
            <Presentation />
            
        </section>
    );
};

export default Home;