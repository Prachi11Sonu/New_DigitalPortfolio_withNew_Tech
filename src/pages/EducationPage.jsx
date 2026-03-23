import Navbar from "../components/Navbar";
import TimelineSection from "../components/TimelineSection";
import { portfolioData } from "../data/portfolioData";

function EducationPage({ theme, toggleTheme }) {
  const { education } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <TimelineSection
        id="education"
        eyebrow="Education"
        title="Academic background and core coursework"
        subtitle="My education represents the academic journey that shaped my understanding and interest in the field of technology."
        items={education}
        renderHeader={(item) => (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary">
                {item.degree}
              </h3>
              <p className="mt-1 text-lg font-medium text-secondary">{item.college}</p>
            </div>
            <span className="pill">{item.year}</span>
          </div>
        )}
        renderBody={(item) => (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.coursework.map((course) => (
              <span key={course} className="pill">
                {course}
              </span>
            ))}
          </div>
        )}
      />
    </div>
  );
}

export default EducationPage;
