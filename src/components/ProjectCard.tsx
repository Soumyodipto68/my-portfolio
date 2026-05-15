import { ArrowUpRight } from "lucide-react";
import { VscGithub } from "react-icons/vsc";

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
    <div
      className="
        border border-[#30363d]
        rounded-3xl
        overflow-hidden
        bg-[#161b22]/40
        backdrop-blur-xl
        hover:border-[#3fb950]
        hover:shadow-lg hover:shadow-[#3fb950]/20
        transition-transform duration-300
        hover:-translate-y-2
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative group overflow-hidden border-r border-[#30363d]">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-50" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 flex flex-col justify-center">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-8">
            <div
              className="
                w-14 h-14 rounded-xl
                bg-[#0d1117] border border-[#30363d]
                flex items-center justify-center
                text-[#3fb950] text-xl font-bold
                shadow-md
              "
            >
              {"</>"}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={github}
                target="_blank"
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full border border-[#30363d]
                  text-[#8b949e] hover:text-white
                  hover:bg-[#3fb950]/20 transition
                "
              >
                <VscGithub size={22} />
              </a>
              <a
                href={live}
                target="_blank"
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full border border-[#30363d]
                  text-[#8b949e] hover:text-white
                  hover:bg-[#3fb950]/20 transition
                "
              >
                <ArrowUpRight size={22} />
              </a>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold mb-6">{title}</h3>

          {/* Description */}
          <p className="text-[#8b949e] leading-8 mb-8">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  px-4 py-2 rounded-lg
                  bg-[#0d1117] border border-[#30363d]
                  text-sm text-[#3fb950]
                  hover:bg-[#3fb950]/10 transition
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
