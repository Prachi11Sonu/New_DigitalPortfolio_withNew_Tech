import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I use to turn ideas into working products"
        subtitle="Grouped for quick scanning across languages, frameworks, tools, and databases."
        variant="centered"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="section-card relative overflow-hidden p-7 transition duration-300 hover:-translate-y-2 hover:shadow-soft"
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r from-accent via-secondary to-primary" />
            <h3 className="font-display text-2xl font-semibold text-primary">
              {group.category}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
