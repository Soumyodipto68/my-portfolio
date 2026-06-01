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
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div variants={staggerItem}>
          <motion.p 
            className="text-[#3fb950] text-xl mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1 
            className="text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Soumyodipto Pal
          </motion.h1>

          <motion.h2 
            className="text-3xl text-[#3fb950] font-semibold mb-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            className="text-[#8b949e] text-lg leading-8 max-w-xl mb-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
           I build scalable, high-performance web applications with modern technologies, focusing on clean architecture, responsive design, seamless user experiences, optimized performance, and efficient development practices to create impactful digital solutions.
          </motion.p>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 185, 80, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3fb950] text-black px-6 py-4 rounded-xl hover:border-[#3fb950] transition cursor-pointer inline-flex items-center justify-center">
              View Projects
            </motion.a>
            <motion.a
              href="/SOUMYODIPTO_PAL_RESUME.pdf"
              download
              whileHover={{ scale: 1.05, borderColor: "#3fb950" }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#30363d] px-6 py-4 rounded-xl hover:border-[#3fb950] transition cursor-pointer inline-flex items-center justify-center"
            >
              <GrDocumentDownload size={20} className="mr-2" />
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
          className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22]"
          whileHover={{ 
            boxShadow: "0 0 30px rgba(32, 178, 166, 0.2)",
            borderColor: "#3fb950",
            transition: { duration: 0.3 }
          }}
        >
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
              <span className="text-[#3fb950]">$ location</span>
            </p>

            <p>kolkata</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;