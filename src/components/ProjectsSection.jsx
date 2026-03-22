import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

function ProjectsSection({ projects, filters, showFilters = true, showViewAll = false }) {
  const [activeFilter, setActiveFilter] = useState("All");

  function hasLiveDemo(project) {
    if (!project.liveDemo) {
      return false;
    }

    return !project.liveDemo.includes("example.com");
  }

  const filteredProjects = useMemo(() => {
    if (!showFilters) {
      return projects;
    }

    if (activeFilter === "All") {
      return projects;
    }

    if (activeFilter === "Full Stack") {
      return projects.filter((project) =>
        ["Django", "MERN"].includes(project.category),
      );
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section id="projects" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow="Project Command Center"
        title="Selected work grouped like a mini project control panel"
        // subtitle="Filter projects by stack and area to quickly scan what I have built across Django, MERN, machine learning, and Java."
        variant="split"
      />
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`pill transition ${
                activeFilter === filter ? "bg-primary text-white" : "bg-accent/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      ) : null}
      <div className="grid gap-5 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="section-card relative overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-soft"
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r from-primary/40 via-accent to-secondary/60" />
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-36 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary/70">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  {project.status ? (
                    <span className="surface-muted mt-2 inline-flex rounded-full border border-accent/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <div className="flex gap-3">
                  {hasLiveDemo(project) ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-primary/10 p-2.5 text-primary transition hover:bg-primary hover:text-white"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary/10 p-2.5 text-primary transition hover:bg-primary hover:text-white"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-primary/80 sm:text-base">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="pill bg-accent/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary/75">
                  Key Features
                </p>
                <ul className="mt-2 space-y-1.5 text-sm leading-6 text-primary/80">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {showViewAll ? (
        <div className="mt-8 flex justify-center">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      ) : null}
    </section>
  );
}

export default ProjectsSection;
