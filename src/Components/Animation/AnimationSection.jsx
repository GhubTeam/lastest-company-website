import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="animated-section"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
