import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

import { skills } from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
  <section id="skills" className="py-24">
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  key={skills.title}
  className="border border-[#30363d] rounded-2xl p-6 hover:border-[#3fb950] transition"
>
      <Container>
        <SectionHeading title="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border border-[#30363d] rounded-2xl p-6 hover:border-[#3fb950] transition"
            >
              <h3 className="text-xl font-semibold text-[#3fb950] mb-6">
                {skill.title}
              </h3>

              <div className="space-y-4">
                {skill.items.map((item) => (
                  <p
                    key={item}
                    className="text-[#8b949e]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
    </section>

  );
};

export default Skills;