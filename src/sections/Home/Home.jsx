import React from 'react';
import './Home.css';
import Picture from './Picture';
import Presentation from './Presentation';

const Home = () => {
    return (
        <section id='home' className="flex flex-col justify-center items-center gap-[5rem] xl:flex-row xl:gap-0 xl:justify-between xl:items-center h-screen xl:mx-[5rem] 2xl:mx-[10rem]">
            <Presentation />
            <Picture />
        </section>
    );
};

export default Home;