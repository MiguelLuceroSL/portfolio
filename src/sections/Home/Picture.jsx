import { motion } from "framer-motion";
import { useState } from "react";

const Picture = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ width: 300, height: 300, overflow: "hidden" }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 0.9 }}
    >
      <motion.img
        src={isHovered ? "../../public/images/avatar2.png" : "../../public/images/avatar1.png"}
        alt="imagen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default Picture;