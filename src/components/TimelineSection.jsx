import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function TimelineSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  renderHeader,
  renderBody,
  headingVariant = "split",
}) {
  return (
    <section id={id} className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        variant={headingVariant}
      />
      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-primary/15">
        {items.map((item, index) => (
          <motion.article
            key={`${id}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="section-card relative ml-10 p-7"
          >
            <span className="absolute -left-10 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white shadow-soft">
              {index + 1}
            </span>
            {renderHeader(item)}
            {renderBody(item)}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
