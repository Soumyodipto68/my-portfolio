import { motion } from "framer-motion";

import Container from "../components/Container";

import { journey } from "../data/journey";
import { staggerContainer, staggerItem } from "../utils/motion";

const Journey = () => {
  return (
    <section id="journey" className="py-24">
      <Container>
        <motion.div 
          className="space-y-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {["education"].map((type) => (
              <div key={type} className="rounded-2xl border border-[#30363d]/70 bg-[#070912] p-6 sm:p-8 lg:p-10">
              <p className="mb-8 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-[#a78bfa]"><span>●</span>{type}</p>
              <div className="relative ml-3 border-l border-[#30363d]">
              {journey.filter((item) => item.type === type).map((item, index) => (
                <motion.div key={index} variants={staggerItem} whileHover={{ x: 6 }} className="relative mb-10 pl-8 last:mb-0">
              
              {/* DOT */}
              <motion.div 
                className="absolute -left-3 top-1 h-5 w-5 rounded-full border-2 border-[#a78bfa] bg-[#070912]"
                whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(63, 185, 80, 0.5)" }}
              />

              {/* YEAR */}
              <motion.p 
                className="absolute right-0 top-0 rounded-xl border border-[#30363d] bg-[#151c2d] px-3 py-2 font-mono text-sm text-[#cbd5e1]"
                whileHover={{ scale: 1.05 }}
              >
                {item.year}
              </motion.p>

              {/* TITLE */}
              <motion.h3 
                className="mb-2 pr-36 text-lg font-semibold sm:text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.title}
              </motion.h3>

              {/* PLACE */}
              <motion.p 
                className="mb-3 text-base text-[#94a3b8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {item.place}
              </motion.p>

              {/* DESCRIPTION */}
              <motion.p 
                className="max-w-3xl text-base leading-7 text-[#64748b]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.description}
              </motion.p>
                </motion.div>
              ))}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Journey;