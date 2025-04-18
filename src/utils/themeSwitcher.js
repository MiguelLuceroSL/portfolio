const themeSwitcher = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    };

    // Apply the current theme on load
    applyTheme(currentTheme);

    return { toggleTheme };
};

export default themeSwitcher;