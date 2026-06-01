import {
  GraduationCap,
  MapPin,
  Mail,
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

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p 
              className="text-[#8b949e] text-lg leading-9"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              I'm a BCA student passionate about
              full stack development and modern web
              technologies.

              <br />
              <br />

              I enjoy building scalable applications,
              solving problems, and continuously
              improving my development skills through
              real-world projects.
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                <GraduationCap className="text-[#3fb950]" />
              </motion.div>

              <span>BCA Student</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.2 }}
              >
                <MapPin className="text-[#3fb950]" />
              </motion.div>

              <span>Kolkata, West Bengal</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.2 }}
              >
                <Mail className="text-[#3fb950]" />
              </motion.div>

              <span>
                <motion.a 
                  href="mailto:soumyodiptopal77@gmail.com" 
                  className="cursor-pointer" 
                  target="_blank"
                  whileHover={{ textDecoration: "underline", color: "#3fb950" }}
                >
                  soumyodiptopal77@gmail.com
                </motion.a>
                
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default About;