import { motion } from "framer-motion";
import { GrDocumentDownload } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { staggerContainer, staggerItem } from "../utils/motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 sm:px-6 lg:px-8"
    >
      <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-10">
        {/* LEFT */}
        <motion.div variants={staggerItem}>
          <motion.p
            className="mb-4 flex items-center gap-2 text-base font-semibold text-[#a78bfa] sm:text-lg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#3fb950] shadow-[0_0_16px_rgba(167,139,250,0.9)]" />
            Hello! I'm
          </motion.p>

          <motion.h1
            className="mb-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="bg-linear-to-r from-[#a78bfa] via-[#8b5cf6] to-[#f8fafc] bg-clip-text text-transparent">Soumyodipto</span><br />Pal
          </motion.h1>

          <motion.h2
            className="mb-6 text-xl font-semibold text-[#a78bfa] sm:text-2xl lg:text-3xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="mb-8 max-w-xl text-sm leading-7 text-[#8b949e] sm:text-base lg:text-lg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I build modern, responsive and scalable web applications using MERN stack and other technologies.
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
                boxShadow: "0 0 24px rgba(124, 58, 237, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 font-medium text-white text-center shadow-[0_8px_24px_rgba(79,70,229,0.2)]"
            >
              View My Work
              <ArrowRight size={17} aria-hidden="true" />
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
              Let's Connect
            </motion.a>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 text-sm text-[#8b949e]">
            <span>Find me on</span>
            <a aria-label="GitHub profile" href="https://github.com/soumyodipto68" target="_blank" rel="noreferrer" className="rounded-lg border border-[#30363d] p-2 hover:text-[#a78bfa]"><VscGithub size={17} /></a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/soumyodipto/" target="_blank" rel="noreferrer" className="rounded-lg border border-[#30363d] p-2 hover:text-[#a78bfa]"><FaLinkedin size={17} /></a>
            <a aria-label="Email Soumyodipto" href="mailto:soumyodiptopal77@gmail.com" className="rounded-lg border border-[#30363d] p-2 hover:text-[#a78bfa]"><Mail size={17} /></a>
          </div>
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
          className="relative w-full overflow-hidden rounded-2xl border border-[#30363d] bg-[#02030a] p-5 opacity-100 shadow-none sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between border-b border-[#30363d] pb-3">
            <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="font-mono text-xs text-[#8b949e]">developer.tsx</span>
          </div>

          <div className="space-y-3 font-mono text-sm leading-7 sm:text-base">
            <p><span className="text-[#a78bfa]">const</span> <span className="text-[#f8fafc]">developer</span> = {"{"}</p>
            <p className="pl-4"><span className="text-[#8b949e]">name:</span> <span className="text-[#34d399]">"Soumyodipto Pal"</span>,</p>
            <p className="pl-4"><span className="text-[#8b949e]">role:</span> <span className="text-[#34d399]">"Full Stack Developer"</span>,</p>
            <p className="pl-4"><span className="text-[#8b949e]">skills:</span> <span className="text-[#34d399]">["React", "Node.js", "TypeScript"]</span>,</p>
            <p className="pl-4"><span className="text-[#8b949e]">passionate:</span> <span className="text-[#fbbf24]">true</span>,</p>
            <p>{"}"}</p>
            <div className="mt-5 flex items-center gap-2 border-t border-[#30363d] pt-4 text-xs text-[#8b949e]">
              <Sparkles size={14} className="text-[#3fb950]" />
              Building with clarity, speed, and care.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;