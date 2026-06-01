import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

import { skills } from "../data/skills";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/motion";

const Skills = () => {
  return (
  <section id="skills" className="py-24">
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="border border-[#30363d] rounded-2xl p-6 hover:border-[#3fb950] transition"
  >
      <Container>
        <SectionHeading title="Skills" />

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={staggerItem}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 30px rgba(32, 178, 166, 0.15)",
                borderColor: "#3fb950"
              }}
              className="border border-[#30363d] rounded-2xl p-6 transition-all duration-300 cursor-pointer"
            >
              <motion.h3 
                className="text-xl font-semibold text-[#3fb950] mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {skill.title}
              </motion.h3>

              <div className="space-y-4">
                {skill.items.map((item, index) => (
                  <motion.p
                    key={item}
                    className="text-[#8b949e]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, color: "#f0f2f5" }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.div>
    </section>

  );
};

export default Skills;