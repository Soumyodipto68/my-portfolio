import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-[#30363d]">
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-8 text-center text-[#8b949e]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ color: "#3fb950" }}
      >
        © 2026 Soumyodipto Pal. Built with React,
        TypeScript & Tailwind CSS.
      </motion.div>
    </footer>
  );
};

export default Footer;