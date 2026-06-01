import {
  Mail,
} from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { staggerContainer, staggerItem } from "../utils/motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading title="Contact" />

        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          <motion.h3 
            variants={staggerItem}
            className="text-4xl font-bold mb-6"
          >
            Let's Build Something Great
          </motion.h3>

          <motion.p 
            variants={staggerItem}
            className="text-[#8b949e] text-lg leading-8 mb-10"
          >
            I'm always interested in learning,
            collaborating, and building impactful
            projects.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6"
            variants={staggerContainer}
          >
            
            <motion.a
              href="mailto:soumyodiptopal77@gmail.com"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(63, 185, 80, 0.1)",
                borderColor: "#3fb950",
                boxShadow: "0 0 20px rgba(63, 185, 80, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border border-[#30363d] px-6 py-4 rounded-xl transition"
            >
              <Mail size={20} />

              Email
            </motion.a>

            <motion.a
              href="https://github.com/soumyodipto68"
              target="_blank"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(63, 185, 80, 0.1)",
                borderColor: "#3fb950",
                boxShadow: "0 0 20px rgba(63, 185, 80, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border border-[#30363d] px-6 py-4 rounded-xl transition"
            >
              <VscGithub size={20} />

              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/soumyodipto-pal-421a2331b/"
              target="_blank"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(63, 185, 80, 0.1)",
                borderColor: "#3fb950",
                boxShadow: "0 0 20px rgba(63, 185, 80, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border border-[#30363d] px-6 py-4 rounded-xl transition"
            >
              <FaLinkedin size={20} />

              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;