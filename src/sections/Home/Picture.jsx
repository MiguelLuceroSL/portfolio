import { motion } from "framer-motion";
import { useState } from "react";

const Picture = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="picture"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.9 }}
    >

      <motion.img
        src={isHovered ? "../../public/images/avatar2.png" : "../../public/images/avatar1.png"}
        alt="imagen"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: "350px", height: "350px", objectFit: "cover" }}
      />
    </motion.div>

  );
};

export default Picture;