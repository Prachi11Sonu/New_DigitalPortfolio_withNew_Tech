import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import LearningNowSection from "../components/LearningNowSection";
import CurrentlyBuildingSection from "../components/CurrentlyBuildingSection";
import JourneyMapSection from "../components/JourneyMapSection";
import ProjectsSection from "../components/ProjectsSection";
import SimpleListSection from "../components/SimpleListSection";
import ProblemSolvingSection from "../components/ProblemSolvingSection";
import { portfolioData } from "../data/portfolioData";

function HomePage({ theme, toggleTheme }) {
  const {
    personal,
    skills,
    interpersonalSkills,
    learningNow,
    journeyMap,
    currentlyBuilding,
    projectFilters,
    projects,
    achievements,
    codingProfiles,
  } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection personal={personal} />
      <SkillsSection skills={skills} />
      <LearningNowSection items={learningNow} />
      <SimpleListSection
        id="interpersonal-skills"
        eyebrow="Interpersonal Skills"
        title="Strengths that shape how I work with people, projects, and challenges"
        subtitle="A quick view of the soft skills I bring into collaboration, learning, and delivery."
        items={interpersonalSkills}
      />
      <JourneyMapSection items={journeyMap} />
      <CurrentlyBuildingSection item={currentlyBuilding} />
      <ProjectsSection
        projects={projects.filter((project) => project.featured)}
        filters={projectFilters}
        showFilters={false}
        showViewAll
      />

      <SimpleListSection
        id="achievements"
        eyebrow="Achievements"
        title="Milestones that reflect consistency, curiosity, and initiative"
        subtitle="Highlight hackathons, coding platform progress, awards, and standout wins."
        items={achievements}
      />

      <ProblemSolvingSection profiles={codingProfiles} />
    </div>
  );
}

export default HomePage;
