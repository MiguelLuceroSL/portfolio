import React, { useState } from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send('service_554yluq', 'template_xl9fk2k', formData, 'ztFjWrrqMqT0EqNtO')
            .then((response) => {
                console.log('Correo enviado con éxito!', response.status, response.text);
                alert('¡Mensaje enviado con éxito!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('Error al enviar el correo:', err);
                alert('Error al enviar el mensaje. Inténtalo más tarde.');
            });
    };

    return (
        <motion.section
            className="about-contact"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <section id="contact" className="contact-section">
                <h2>Contactarme</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='Tu nombre aquí.'
                            className='input-contact'
                            pattern="[A-Za-z\s]+"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder='Tu email aquí.'
                            className='input-contact'
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Escribí tu mensaje aquí...'
                            className='textarea'
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#4ade80", // verde clarito
                            boxShadow: "0px 0px 8px rgb(74, 222, 128)" // sombrita verde
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Enviar
                    </motion.button>
                </form>
            </section>
        </motion.section>
    );
};

export default Contact;