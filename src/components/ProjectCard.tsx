import {
  ArrowUpRight,
} from "lucide-react";

import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 hover:border-[#3fb950] transition duration-300"
    >
      <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 hover:border-[#3fb950] transition duration-300">

        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-center text-[#3fb950] text-xl font-bold">
            {"</>"}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={github}
              target="_blank"
              className="text-[#8b949e] hover:text-white transition"
            >
              <VscGithub size={24} />
            </a>

            <a
              href={live}
              target="_blank"
              className="text-[#8b949e] hover:text-white transition"
            >
              <ArrowUpRight />
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-[#8b949e] leading-8 mb-8">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-sm text-[#3fb950]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

  );
};

export default ProjectCard;