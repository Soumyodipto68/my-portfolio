import { ArrowUpRight } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";

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
      className="group overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1322]/80 transition-all duration-300 hover:border-[#a78bfa]"
    >
      <div>
        {/* LEFT IMAGE */}
        <motion.div 
          className="relative flex items-center justify-center overflow-hidden border-b border-[#30363d] bg-[#0d1117]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="aspect-video w-full overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0d1117]/40 to-transparent pointer-events-none"/>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex min-h-56 flex-col p-5">
          {/* Top Row */}
          <motion.div 
            className="mb-5 flex items-center justify-between"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#30363d] bg-[#070912] text-sm font-bold text-[#a78bfa]"
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
                  flex h-8 w-8 items-center justify-center rounded-lg border border-[#30363d]
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
                  flex h-8 w-8 items-center justify-center rounded-lg border border-[#30363d]
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
            className="mb-3 text-xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="mb-5 text-base leading-7 text-[#8b949e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            className="mt-auto flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {tech.map((item, index) => (
              <motion.span
                key={item}
                className="
                  rounded-lg border border-[#30363d] bg-[#151c2d] px-3 py-2 text-sm font-semibold text-[#cbd5e1]
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
