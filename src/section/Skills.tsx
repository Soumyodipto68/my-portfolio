import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="py-24 bg-[#161b22]">
      <Container>
        <SectionHeading title="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border border-[#30363d] rounded-2xl p-6 hover:border-[#3fb950] transition"
            >
              <h3 className="text-xl font-semibold text-[#3fb950] mb-6">
                {skill.title}
              </h3>

              <div className="space-y-4">
                {skill.items.map((item) => (
                  <p
                    key={item}
                    className="text-[#8b949e]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;