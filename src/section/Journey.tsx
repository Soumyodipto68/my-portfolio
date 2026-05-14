import { motion } from "framer-motion";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

import { journey } from "../data/journey";

const Journey = () => {
  return (
    <section id="journey" className="py-24">
      <Container>
        <SectionHeading title="Educational Journey" />

        <div className="relative border-l border-[#30363d] ml-4 space-y-16">
          
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-10"
            >
              
              {/* DOT */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#3fb950]" />

              {/* YEAR */}
              <p className="text-[#3fb950] font-mono mb-3">
                {item.year}
              </p>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* PLACE */}
              <p className="text-[#8b949e] mb-4">
                {item.place}
              </p>

              {/* DESCRIPTION */}
              <p className="text-[#8b949e] leading-8 max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Journey;