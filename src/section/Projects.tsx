import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading title="Featured Projects" />

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              image={project.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;