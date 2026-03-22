import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TechRibbon from "./TechRibbon";

function HeroSection({ personal }) {
  const actions = [
    { label: "GitHub", href: personal.github, icon: Github },
    { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
  ];

  return (
    <>
      <section id="hero" className="section-shell scroll-mt-24 py-10 sm:py-16">
        <div className="parallax-shell section-card relative overflow-hidden bg-hero-glow p-8 sm:p-10 lg:p-14">
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="parallax-orb parallax-orb-one" />
          <div className="parallax-orb parallax-orb-two" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="pill">Available for internships and collaborations</span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                {personal.name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-secondary sm:text-2xl">
                {personal.title}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-primary/80 sm:text-lg">
                {personal.shortBio}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {personal.focusAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                    className="pill border-primary/20 bg-accent/10"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {actions.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {label}
                  </a>
                ))}
                <a href={personal.resume} className="btn-primary" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {personal.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.32 + index * 0.08 }}
                    className="surface-muted rounded-3xl border border-primary/10 p-4"
                  >
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-secondary/75">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto max-w-sm"
            >
              <div className="floating-orb absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-accent/20 blur-2xl" />
              <div className="surface-strong border-soft relative z-20 overflow-hidden rounded-[32px] border p-3 shadow-soft">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="h-[420px] w-full rounded-[26px] object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <TechRibbon items={personal.techRibbon} />
    </>
  );
}

export default HeroSection;
