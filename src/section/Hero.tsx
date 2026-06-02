import { motion } from "framer-motion";
import { GrDocumentDownload } from "react-icons/gr";
import { staggerContainer, staggerItem } from "../utils/motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-[85vh] flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* LEFT */}
        <motion.div variants={staggerItem}>
          <motion.p
            className="text-[#3fb950] text-base sm:text-lg mb-3"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Soumyodipto Pal
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-[#3fb950] font-semibold mb-5"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-[#8b949e] text-sm sm:text-base lg:text-lg leading-7 max-w-xl mb-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I build scalable, high-performance web applications with modern
            technologies, focusing on clean architecture, responsive design,
            seamless user experiences, optimized performance, and efficient
            development practices.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(63,185,80,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3fb950] text-black px-5 py-3 rounded-xl font-medium text-center"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/SOUMYODIPTO_PAL_RESUME.pdf"
              download
              whileHover={{
                scale: 1.05,
                borderColor: "#3fb950",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#30363d] px-5 py-3 rounded-xl inline-flex items-center justify-center"
            >
              <GrDocumentDownload size={18} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{
            boxShadow: "0 0 30px rgba(63,185,80,0.15)",
            borderColor: "#3fb950",
          }}
          className="border border-[#30363d] rounded-2xl p-5 sm:p-7 bg-[#161b22] w-full"
        >
          <div className="flex gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="font-mono text-sm sm:text-base space-y-3">
            <p>
              <span className="text-[#3fb950]">$ whoami</span>
            </p>

            <p>Soumyodipto Pal</p>

            <p>
              <span className="text-[#3fb950]">$ role</span>
            </p>

            <p>Full Stack Developer</p>

            <p>
              <span className="text-[#3fb950]">$ location</span>
            </p>

            <p>Kolkata, India</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;