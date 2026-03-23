import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import { portfolioData } from "../data/portfolioData";

function AboutPage({ theme, toggleTheme }) {
  const { personal } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="section-shell py-10 sm:py-16">
        <div className="section-card grid items-center gap-8 overflow-hidden p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="floating-orb absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-accent/20 blur-2xl" />
            <div className="surface-strong border-soft relative z-10 overflow-hidden rounded-[32px] border p-3 shadow-soft">
              <img
                src={personal.photo}
                alt={personal.name}
                className="h-[460px] w-full rounded-[26px] object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <span className="pill">About Page</span>
            <h1 className="mt-5 font-display text-4xl font-bold text-primary sm:text-5xl">
              More about me, my background, and where I’m heading
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary/80 sm:text-lg">
              This page introduces who I am, my background, and the journey that led me to
              explore the world of technology.
            </p>
          </motion.div>
        </div>
      </section>

      <AboutSection personal={personal} />
    </div>
  );
}

export default AboutPage;
