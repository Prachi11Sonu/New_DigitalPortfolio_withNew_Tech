import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="text-sm font-medium">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
