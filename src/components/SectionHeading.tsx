import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({
  title,
}: SectionHeadingProps) => {
  return (
    <motion.div 
      className="mb-10 flex items-end justify-between gap-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#8b949e]">
          / workspace
        </p>
        <motion.h2 
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          whileHover={{ color: "#3fb950" }}
        >
          {title}
        </motion.h2>
      </div>
      <motion.div 
        className="mb-2 h-px flex-1 bg-gradient-to-r from-[#3fb950]/60 to-transparent"
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