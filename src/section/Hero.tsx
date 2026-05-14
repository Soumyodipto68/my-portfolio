import { motion } from "framer-motion";
import { GrDocumentDownload } from "react-icons/gr";
import { fadeUp } from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <section id="home" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-[#3fb950] text-xl mb-4">
            Hi, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Soumyodipto Pal
          </h1>

          <h2 className="text-3xl text-[#3fb950] font-semibold mb-6">
            Full Stack Developer
          </h2>

          <p className="text-[#8b949e] text-lg leading-8 max-w-xl mb-10">
            I build scalable and modern web applications
            using React, Node.js, Express, and MongoDB.
          </p>

          <div className="flex gap-4">
            <a 
            href="#projects"
            className="bg-[#3fb950] text-black px-6 py-4 rounded-xl hover:border-[#3fb950] transition cursor-pointer inline-flex items-center justify-center">
              View Projects
            </a>
            <a
              href="/src/assets/SOUMYODIPTO_PAL_RESUME.pdf"
              download
              className="border border-[#30363d] px-6 py-4 rounded-xl hover:border-[#3fb950] transition cursor-pointer inline-flex items-center justify-center"
            >
              <GrDocumentDownload size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22]">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="font-mono text-lg space-y-4">
            <p>
              <span className="text-[#3fb950]">$ whoami</span>
            </p>

            <p>Soumyodipto Pal</p>

            <p>
              <span className="text-[#3fb950]">$ role</span>
            </p>

            <p>Full Stack Developer</p>

            <p>
              <span className="text-[#3fb950]">$ stack</span>
            </p>

            <p>MERN Stack</p>
          </div>
        </div>
      </section>
    </motion.div>

  );
};

export default Hero;