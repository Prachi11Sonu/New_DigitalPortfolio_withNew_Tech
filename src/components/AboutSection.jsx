import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function AboutSection({ personal }) {
  const details = [
    { label: "College", value: personal.college },
    { label: "Branch", value: personal.branch },
    { label: "Year", value: personal.year },
    { label: "Career Goal", value: personal.careerGoal },
  ];

  return (
    <section id="about" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow="About Me"
        title="A little more about the person behind the projects"
        subtitle="A concise introduction, academic background, and the direction I'm growing toward."
        variant="split"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="section-card relative grid gap-8 overflow-hidden p-8 lg:grid-cols-[1.3fr_0.7fr]"
      >
        <div className="absolute inset-y-0 left-0 w-2 rounded-l-[28px] bg-gradient-to-b from-accent via-secondary to-primary" />
        <div>
          <p className="text-base leading-8 text-primary/80 sm:text-lg">{personal.about}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="surface-muted rounded-3xl p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary/75">
                Focus Areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {personal.focusAreas.map((area) => (
                  <span key={area} className="pill bg-accent/10">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface-muted rounded-3xl p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary/75">
                Current Direction
              </p>
              <p className="mt-3 text-base leading-7 text-primary/85">
                Building stronger end-to-end skills across full stack development, data
                analysis, and machine learning project execution.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {details.map((detail) => (
            <div key={detail.label} className="surface-muted rounded-3xl p-5 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary/80">
                {detail.label}
              </p>
              <p className="mt-2 text-base font-semibold text-primary">{detail.value}</p>
            </div>
          ))}
          <div className="highlight-card rounded-3xl p-5 shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--highlight-muted-text)]">
              Core Interest
            </p>
            <p className="mt-3 text-base leading-7 text-[color:var(--highlight-text)]">
              Full stack product development combined with data analysis, machine learning,
              and practical problem solving.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
