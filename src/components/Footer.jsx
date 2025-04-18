import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div style={styles.socialLinks}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Twitter
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
        marginTop: '2rem',
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