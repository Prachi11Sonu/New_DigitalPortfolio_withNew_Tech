import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { portfolioData } from "../data/portfolioData";

function LandingPage({ theme, toggleTheme }) {
  const { personal } = portfolioData;

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-[image:var(--landing-overlay)]" />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="section-shell relative py-12">
        <div className="mb-8 flex justify-end">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill">Personal Portfolio</span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-4 text-xl font-semibold text-secondary sm:text-2xl">
              {personal.title}
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-primary/80 sm:text-lg">
              {personal.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {personal.focusAreas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="pill border-primary/20 bg-accent/10"
                >
                  {area}
                </motion.span>
              ))}
            </div>
            <Link to="/home" className="btn-primary mt-8">
              Enter Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto max-w-md"
          >
            <div className="floating-orb absolute inset-0 rounded-[36px] bg-accent/15 blur-3xl" />
            <div className="section-card relative z-20 overflow-hidden rounded-[36px] p-4">
              <img
                src={personal.photo}
                alt={personal.name}
                className="h-[520px] w-full rounded-[28px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
