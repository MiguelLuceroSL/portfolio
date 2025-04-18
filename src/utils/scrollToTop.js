import { animate } from "framer-motion";

export const scrollToTop = () => {
    const scrollY = window.scrollY;

    animate(scrollY, 0, {
        duration: 0.5,
        onUpdate: (value) => window.scrollTo(0, value),
    });
};