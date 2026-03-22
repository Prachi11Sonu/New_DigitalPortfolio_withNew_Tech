import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function ProblemSolvingSection({ profiles }) {
  return (
    <section id="problem-solving" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow="Problem Solving"
        title="Coding profiles that reflect consistency and technical growth"
        subtitle="A focused spotlight on the platforms where I practice, publish, and strengthen my developer profile."
        variant="banner"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.label}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="section-card group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-2 hover:shadow-soft"
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent via-secondary to-primary" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-secondary/75">
                  Problem Solving Profile
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-primary">
                  {profile.label}
                </h3>
              </div>
              <ExternalLink className="h-5 w-5 text-secondary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="mt-5 text-base leading-7 text-primary/80">{profile.description}</p>
            <div className="mt-5 grid gap-3">
              <div className="surface-emphasis rounded-2xl border border-primary/12 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-secondary/85">
                  Spotlight
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">{profile.highlight}</p>
              </div>
              <div className="surface-muted rounded-2xl border border-primary/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-secondary/85">
                  Learning Focus
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">{profile.focus}</p>
              </div>
            </div>
            <p className="mt-5 break-all text-sm font-medium text-secondary/95">{profile.url}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default ProblemSolvingSection;
