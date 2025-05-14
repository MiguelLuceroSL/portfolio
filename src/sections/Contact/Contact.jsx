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
            className="flex flex-col items-center justify-center w-full h-full py-[4rem] px-[2rem] text-[#f0f0f0] text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <section id="contact" className="contact-section flex flex-col justify-between items-center text-[#333] text-center bg-[#03142e] py-[8rem] px-[2rem] w-[400px] sm:w-[500px] md:w-[600px]">
                <h2 className='fuente-ubuntu-sans text-[2.5rem] mb-[1.5rem] text-[#f0f0f0]'>Contactarme</h2>
                <form className="flex flex-col gap-[2rem] w-[200px] sm:w-[300px] md:w-[400px]" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[0.5rem] items-start">
                        <label className='text-[1.1rem] fuente-ubuntu-sans' htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='Tu nombre aquí.'
                            className='input-contact text-[1rem] fuente-ubuntu-sans p-[0.5rem] w-full h-[40px]'
                            pattern="[A-Za-z\s]+"
                        />
                    </div>
                    <div className="flex flex-col gap-[0.5rem] items-start">
                        <label className='text-[1.1rem] fuente-ubuntu-sans' htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder='Tu email aquí.'
                            className='input-contact text-[1rem] fuente-ubuntu-sans p-[0.5rem] w-full h-[40px]'
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                    </div>
                    <div className="flex flex-col gap-[0.5rem] items-start">
                        <label className='fuente-ubuntu-sans text-[1.1rem]' htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Escribí tu mensaje aquí...'
                            className='textarea-contact fuente-ubuntu-sans text-[1rem] w-full h-[100px] p-[0.5rem]'
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="submit-button-contact fuente-ubuntu-sans py-[0.75rem] px-[1.5rem] bg-[#007bff] text-[#fff] text-[1.2rem] cursor-pointer"
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