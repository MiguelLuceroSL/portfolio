import { motion } from "framer-motion";
import { useState } from "react";

const Picture = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ width: 300, height: 300, overflow: "hidden" }}
    >
      <motion.img
        src={isHovered ? "../../public/images/avatar2.png" : "../../public/images/avatar1.png"}
        alt="imagen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default Picture;