import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function LearningNowSection({ items }) {
  return (
    <section id="learning-now" className="section-shell scroll-mt-24 py-10">
      <div className="section-card relative overflow-hidden border border-accent/20 bg-hero-glow p-8 sm:p-10">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative">
          <SectionHeading
            eyebrow="Learning Now"
            title="What I'm actively learning and improving right now"
            subtitle="A quick snapshot of the areas I am currently deepening through projects and hands-on practice."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="surface-strong rounded-[24px] border border-primary/10 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-soft"
              >
                <span className="pill bg-accent/10">Currently Exploring</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-primary/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningNowSection;
