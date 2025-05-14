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
        src={isHovered ? "../../img/avatar2.png" : "../../img/avatar1.png"}
        alt="imagen"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{objectFit: "cover" }}
        className="object-cover w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem]"
      />
    </motion.div>

  );
};

export default Picture;