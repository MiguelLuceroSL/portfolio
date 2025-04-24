import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" style={styles.footer}>
            <p style={styles.text}>
                © {new Date().getFullYear()} Miguel Roque Roberto Lucero. Todos los derechos reservados.
            </p>
            <div style={styles.socialLinks}>
                <a href="https://github.com/MiguelLuceroSL" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/lucero-roque-roberto-miguel-2122bb251/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};
const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
    },
    text: {
        margin: 0,
        fontSize: '1rem',
    },
    socialLinks: {
        marginTop: '0.5rem',
    },
    link: {
        color: '#61dafb',
        margin: '0 0.5rem',
        textDecoration: 'none',
    },
};
export default Footer;

