import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

function SimpleListSection({ id, eyebrow, title, subtitle, items }) {
  const isCompact = id === "interpersonal-skills";
  const isAchievement = id === "achievements";
  const headingVariant = isCompact ? "centered" : isAchievement ? "banner" : "split";

  return (
    <section id={id} className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        variant={headingVariant}
      />
      <div
        className={
          isCompact
            ? "flex flex-wrap gap-4"
            : isAchievement
              ? "grid gap-5 md:grid-cols-2"
              : "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        }
      >
        {items.map((item, index) => (
          <motion.div
            key={`${id}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className={`section-card flex items-start transition duration-300 hover:-translate-y-2 hover:shadow-soft ${
              isCompact ? "px-4 py-3" : isAchievement ? "min-h-32 p-6" : "min-h-36 p-6"
            }`}
          >
            {typeof item === "string" ? (
              <div className={`flex ${isCompact ? "gap-3" : "gap-4"}`}>
                <span className={`${isCompact ? "mt-1.5 h-2.5 w-2.5" : "mt-1 h-3 w-3"} rounded-full bg-accent`} />
                <p className={`${isCompact ? "text-sm leading-6" : "text-base leading-7"} text-primary/80`}>
                  {item}
                </p>
              </div>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex w-full gap-4"
              >
                <span className="mt-1 h-3 w-3 rounded-full bg-accent" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-xl font-semibold text-primary">
                      {item.label}
                    </p>
                    <ExternalLink className="h-4 w-4 shrink-0 text-secondary" />
                  </div>
                  <p className="mt-2 text-base leading-7 text-primary/80">
                    {item.description}
                  </p>
                  <p className="mt-3 break-all text-sm text-secondary">{item.url}</p>
                </div>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SimpleListSection;
