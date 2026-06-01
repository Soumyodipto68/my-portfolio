import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

import { projects } from "../data/projects";
import { staggerContainer, staggerItem } from "../utils/motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading title="Featured Projects" />

        <motion.div 
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={staggerItem}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                live={project.live}
                image={project.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;