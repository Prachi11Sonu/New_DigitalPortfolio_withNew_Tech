import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function CurrentlyBuildingSection({ item }) {
  return (
    <section id="currently-building" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow={item.eyebrow}
        title={item.title}
        subtitle="A focused snapshot of the main project I am actively working on right now."
        variant="banner"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="section-card relative overflow-hidden p-8 sm:p-10"
      >
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="pill border-accent/30 bg-accent/10">Active Project</span>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary/80 sm:text-lg">
              {item.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span key={tag} className="pill border-primary/20 bg-accent/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {item.milestones.map((milestone, index) => (
              <motion.div
                key={milestone}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="surface-muted rounded-3xl border border-primary/10 p-5"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-secondary/75">
                  Milestone {index + 1}
                </p>
                <p className="mt-2 text-base leading-7 text-primary/85">{milestone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CurrentlyBuildingSection;
