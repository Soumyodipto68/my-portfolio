import { motion } from "framer-motion";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

import { journey } from "../data/journey";
import { staggerContainer, staggerItem } from "../utils/motion";

const Journey = () => {
  return (
    <section id="journey" className="py-24">
      <Container>
        <SectionHeading title="Educational Journey" />

        <motion.div 
          className="relative border-l border-[#30363d] ml-4 space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {journey.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ x: 10 }}
              className="relative pl-10"
            >
              
              {/* DOT */}
              <motion.div 
                className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#3fb950]"
                whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(63, 185, 80, 0.5)" }}
              />

              {/* YEAR */}
              <motion.p 
                className="text-[#3fb950] font-mono mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {item.year}
              </motion.p>

              {/* TITLE */}
              <motion.h3 
                className="text-2xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.title}
              </motion.h3>

              {/* PLACE */}
              <motion.p 
                className="text-[#8b949e] mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {item.place}
              </motion.p>

              {/* DESCRIPTION */}
              <motion.p 
                className="text-[#8b949e] leading-8 max-w-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Journey;