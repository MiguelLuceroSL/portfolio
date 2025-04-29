import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import "../styles/Burger.css";

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);

    return (
        <MotionConfig
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <motion.button
                initial={false}
                onClick={() => setActive((prev) => !prev)}
                className="burger-button"
                animate={active ? "open" : "closed"}>
                <motion.span
                    className="burger-span span1"
                    variants={{
                        open: {  
                            rotate: ["0deg", "0deg",  "45deg"],
                            top: ["35%", "50%", "50%"],
                        },
                        closed: { 
                            rotate: ["45deg", "0deg",  "0deg"],
                            top: ["50%", "50%", "35%"],
                        },
                    }}
                ></motion.span>
                <motion.span
                    className="burger-span span2"
                    variants={{
                        open: {  
                            rotate: ["0deg", "0deg",  "-45deg"]
                        },
                        closed: { 
                            rotate: ["-45deg", "0deg",  "0deg"]
                        },
                    }}
                ></motion.span>
                <motion.span
                    className="burger-span span3"
                    variants={{
                        open: {  
                            rotate: ["0deg", "0deg",  "45deg"],
                            left: '50%',
                            bottom: ["35%", "50%", "50%"],
                        },
                        closed: { 
                            rotate: ["45deg", "0deg",  "0deg"],
                            left: 'calc(50% + 10px)',
                            bottom: ["50%", "50%", "35%"],
                        },
                    }}
                ></motion.span>
            </motion.button>
        </MotionConfig>
    );
}

export default AnimatedHamburgerButton;