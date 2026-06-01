import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({
  title,
}: SectionHeadingProps) => {
  return (
    <motion.div 
      className="flex items-center gap-4 mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="text-[#3fb950] font-mono text-xl"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        //
      </motion.span>

      <motion.h2 
        className="text-3xl font-bold"
        whileHover={{ color: "#3fb950" }}
      >
        {title}
      </motion.h2>

      <motion.div 
        className="flex-1 h-px bg-[#30363d]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

export default SectionHeading;