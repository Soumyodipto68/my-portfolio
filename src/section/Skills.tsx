import Container from "../components/Container";
import { motion } from "framer-motion";
import { Braces, Database, Globe, Layers, Server, Wrench } from "lucide-react";
import { skills } from "../data/skills";
import { staggerContainer, staggerItem } from "../utils/motion";

const categoryIcons = {
  "Programming Languages": Braces,
  Frontend: Globe,
  Backend: Server,
  Database,
  "API & Testing Tools": Wrench,
  "Version Control": Layers,
  Deployment: Globe,
  "Other Tools": Wrench,
};

const Skills = () => {
  return (
  <section id="skills" className="py-24">
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="rounded-2xl border border-[#30363d]/70 bg-transparent p-0 shadow-none transition sm:p-0"
  >
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technology <span className="text-[#a78bfa]">I worked with</span></h2>
        </div>

        <motion.div 
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => {
            const Icon = categoryIcons[skill.title as keyof typeof categoryIcons] ?? Layers;
            return (
            <motion.div
              key={skill.title}
              variants={staggerItem}
              whileHover={{ y: -6, borderColor: "#a78bfa", boxShadow: "0 12px 30px rgba(139,92,246,0.16)" }}
              className="group rounded-xl border border-[#30363d] bg-[#0d1322]/80 p-5 transition-all duration-300"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#a78bfa]/25 bg-[#a78bfa]/10 text-[#a78bfa]"><Icon size={17} aria-hidden="true" /></div>
                <span className="font-mono text-sm text-[#8b949e]">{String(skill.items.length).padStart(2, "0")}</span>
              </div>
              <h3 className="mb-4 text-lg font-semibold text-[#f8fafc] transition-colors group-hover:text-[#a78bfa]">{skill.title}</h3>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-base text-[#8b949e] transition-colors hover:text-[#f8fafc]"><span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" aria-hidden="true" />{item}</p>
                ))}
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </motion.div>
    </section>

  );
};

export default Skills;