import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Hi, I'm [Your Name], a passionate [Your Profession] specializing in [Your Skills].
                </p>
                <a href="#about" className="btn">
                    Learn More About Me
                </a>
            </div>
        </section>
    );
};

export default Home;