import Navbar from "../components/Navbar";
import TimelineSection from "../components/TimelineSection";
import { portfolioData } from "../data/portfolioData";

function ExperiencePage({ theme, toggleTheme }) {
  const { experience } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <TimelineSection
        id="experience"
        eyebrow="Experience"
        title="Internships and practical work that shaped my development process"
        subtitle="A dedicated page for training, hands-on execution, and the work experience that has strengthened your technical growth."
        items={experience}
        renderHeader={(item) => (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary">
                {item.role}
              </h3>
              <p className="mt-1 text-lg font-medium text-secondary">{item.company}</p>
            </div>
            <span className="pill">{item.duration}</span>
          </div>
        )}
        renderBody={(item) => (
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-5 space-y-3 text-primary/80">
              {item.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
}

export default ExperiencePage;
