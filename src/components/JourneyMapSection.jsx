import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function JourneyMapSection({ items }) {
  return (
    <section id="journey-map" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow="Journey Map"
        title="A simple roadmap of how my learning and project work has evolved"
        subtitle="From academic foundation to Django, machine learning, and current MERN development."
        variant="centered"
      />
      <div className="relative grid gap-6 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="section-card relative overflow-hidden p-6"
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r from-accent via-secondary to-primary" />
            <span className="pill bg-accent/10">{item.phase}</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-primary/80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default JourneyMapSection;
