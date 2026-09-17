import {
  GraduationCap,
  MapPin,
  Mail,
  FolderKanban,
  Rocket,
  Star,
  Trophy,
} from "lucide-react";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <SectionHeading title="About Me" />

        <div className="grid gap-6 rounded-2xl border border-[#30363d]/70 bg-[#0d1322]/55 p-6 shadow-[0_0_40px_rgba(139,92,246,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          
          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h3 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Get to know <span className="text-[#a78bfa]">me!</span>
            </motion.h3>
            <motion.p 
              className="max-w-lg text-base leading-7 text-[#8b949e]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              I'm a 3rd year BCA student at Techno India University, passionate about coding and building real-world solutions. I love turning ideas into products.
            </motion.p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex gap-3"><MapPin className="text-[#a78bfa]" size={20} /><span><b className="block text-sm">Location</b><small className="text-[#8b949e]">Kolkata, India</small></span></div>
              <div className="flex gap-3"><Star className="text-[#a78bfa]" size={20} /><span><b className="block text-sm">CGPA</b><small className="text-[#8b949e]">9.02 / 10</small></span></div>
              <div className="flex gap-3"><GraduationCap className="text-[#a78bfa]" size={20} /><span><b className="block text-sm">Education</b><small className="text-[#8b949e]">BCA, Techno India University</small></span></div>
              <div className="flex gap-3"><Mail className="text-[#a78bfa]" size={20} /><span><b className="block text-sm">Email</b><small className="text-[#8b949e]">soumyodipto.pal@gmail.com</small></span></div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div 
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
            <motion.div 
              className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#30363d] bg-[#070912]/65 p-4 text-center"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <FolderKanban className="mb-3 text-[#a78bfa]" />
              <strong className="text-3xl">5+</strong><span className="text-sm text-[#8b949e]">Projects Completed</span>
            </motion.div>

            <motion.div 
              className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#30363d] bg-[#070912]/65 p-4 text-center"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <Trophy className="mb-3 text-[#34d399]" /><strong className="text-3xl">4+</strong><span className="text-sm text-[#8b949e]">Technologies Mastered</span>
            </motion.div>

            <motion.div 
              className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#30363d] bg-[#070912]/65 p-4 text-center"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <Rocket className="mb-3 text-[#f59e0b]" /><strong className="text-3xl">15+</strong><span className="text-sm text-[#8b949e]">Features Implemented</span>
            </motion.div>
            <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#30363d] bg-[#070912]/65 p-4 text-center"><strong className="text-3xl text-[#22d3ee]">9.02</strong><span className="text-sm text-[#8b949e]">Current CGPA</span></div>
            <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#30363d] bg-[#070912]/65 p-4 text-center"><strong className="text-3xl text-[#a78bfa]">∞</strong><span className="text-sm text-[#8b949e]">Learning Everyday</span></div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default About;