import {
  Mail,
} from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <section className="py-24 bg-[#161b22]">
      <Container>
        <SectionHeading title="Contact" />

        <div className="max-w-3xl">
          
          <h3 className="text-4xl font-bold mb-6">
            Let's Build Something Great
          </h3>

          <p className="text-[#8b949e] text-lg leading-8 mb-10">
            I'm always interested in learning,
            collaborating, and building impactful
            projects.
          </p>

          <div className="flex flex-wrap gap-6">
            
            <a
              href="mailto:soumyodipto123@gmail.com"
              className="flex items-center gap-3 border border-[#30363d] px-6 py-4 rounded-xl hover:border-[#3fb950] transition"
            >
              <Mail size={20} />

              Email
            </a>

            <a
              href="#"
              className="flex items-center gap-3 border border-[#30363d] px-6 py-4 rounded-xl hover:border-[#3fb950] transition"
            >
              <VscGithub size={20} />

              GitHub
            </a>

            <a
              href="#"
              className="flex items-center gap-3 border border-[#30363d] px-6 py-4 rounded-xl hover:border-[#3fb950] transition"
            >
              <FaLinkedin size={20} />

              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;