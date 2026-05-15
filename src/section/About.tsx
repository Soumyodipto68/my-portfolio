import {
  GraduationCap,
  MapPin,
  Mail,
} from "lucide-react";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

const About = () => {
  return (
    <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
   >
    <section id="about" className="py-24">
      <Container>
        <SectionHeading title="About Me" />

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT */}
          <div>
            <p className="text-[#8b949e] text-lg leading-9">
              I'm a BCA student passionate about
              full stack development and modern web
              technologies.

              <br />
              <br />

              I enjoy building scalable applications,
              solving problems, and continuously
              improving my development skills through
              real-world projects.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            
            <div className="flex items-center gap-4">
              <GraduationCap className="text-[#3fb950]" />

              <span>BCA Student</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#3fb950]" />

              <span>Kolkata, West Bengal</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#3fb950]" />

              <span>
                <a href="mailto:soumyodiptopal77@gmail.com" className="cursor-pointer" target="_blank">soumyodiptopal77@gmail.com</a>
                
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
</motion.div>

  );
};

export default About;