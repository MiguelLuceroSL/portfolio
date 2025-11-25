import '../styles/Footer.css';
const Footer = () => {


    return (
        <footer id="footer" className='flex flex-col bg-[#03142e] text-[#fff] text-center py-[1rem] gap-[1rem]'>
            <p className='text-footer m-0 text-[1rem] text-[#f0f0f0]'>
                © {new Date().getFullYear()} Miguel Roque Roberto Lucero. Todos los derechos reservados.
            </p>
            <div className='flex flex-row justify-center mt-[0.5rem] gap-[2rem]'>
                <a className='links-footer text-[1.2rem] text-[#61dafb] hover:text-[#21a1f1] my-0 mx-[0.5]' href="https://github.com/MiguelLuceroSL" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a className='links-footer text-[1.2rem] text-[#61dafb] hover:text-[#21a1f1] my-0 mx-[0.5]' href="https://www.linkedin.com/in/lucero-miguel-roque-roberto-2122bb251/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};
export default Footer;

