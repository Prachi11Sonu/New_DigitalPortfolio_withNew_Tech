import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import { portfolioData } from "../data/portfolioData";

function ProjectsPage({ theme, toggleTheme }) {
  const { projects, projectFilters } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ProjectsSection projects={projects} filters={projectFilters} />
    </div>
  );
}

export default ProjectsPage;
