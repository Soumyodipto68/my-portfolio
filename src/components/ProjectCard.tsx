import { ArrowUpRight } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { float, hoverScale } from "../utils/motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(32, 178, 166, 0.15)",
        transition: { duration: 0.3 }
      }}
      className="
        border border-[#30363d]
        rounded-3xl
        overflow-hidden
        bg-[#161b22]/40
        backdrop-blur-xl
        hover:border-[#3fb950]
        transition-all duration-300
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <motion.div 
          className="relative overflow-hidden border-r border-[#30363d] bg-[#0d1117] flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-full aspect-video overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 to-transparent pointer-events-none"/>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center">
          {/* Top Row */}
          <motion.div 
            className="flex items-center justify-between mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="
                w-14 h-14 rounded-xl
                bg-[#0d1117] border border-[#30363d]
                flex items-center justify-center
                text-[#3fb950] text-xl font-bold
                shadow-md
              "
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {"</>"}
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.a
                href={github}
                target="_blank"
                whileHover={{ 
                  scale: 1.15, 
                  backgroundColor: "rgba(63, 185, 80, 0.2)",
                  borderColor: "#3fb950"
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full border border-[#30363d]
                  text-[#8b949e] hover:text-white
                  transition
                "
              >
                <VscGithub size={22} />
              </motion.a>
              <motion.a
                href={live}
                target="_blank"
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: "rgba(63, 185, 80, 0.2)",
                  borderColor: "#3fb950"
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full border border-[#30363d]
                  text-[#8b949e] hover:text-white
                  transition
                "
              >
                <ArrowUpRight size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-[#8b949e] leading-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {tech.map((item, index) => (
              <motion.span
                key={item}
                className="
                  px-4 py-2 rounded-lg
                  bg-[#0d1117] border border-[#30363d]
                  text-sm text-[#3fb950]
                  transition
                "
                whileHover={{ 
                  backgroundColor: "rgba(63, 185, 80, 0.1)",
                  borderColor: "#3fb950",
                  scale: 1.05
                }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
