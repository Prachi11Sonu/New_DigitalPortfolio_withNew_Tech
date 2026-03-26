import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/home"
        element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/about"
        element={<AboutPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/projects"
        element={<ProjectsPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/experience"
        element={<ExperiencePage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/education"
        element={<EducationPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/certifications"
        element={<CertificationsPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/certificates"
        element={<CertificationsPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/contact"
        element={<ContactPage theme={theme} toggleTheme={toggleTheme} />}
      />
    </Routes>
  );
}

export default App;
