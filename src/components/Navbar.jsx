import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNav(href) {
    const [pathname, hash] = href.split("#");

    if (!hash) {
      navigate(pathname);
      setOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetPath = pathname || location.pathname;

    if (location.pathname !== targetPath) {
      navigate(targetPath);

      window.setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--nav-border)] bg-[color:var(--nav-bg)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <button
          type="button"
          onClick={() => handleNav("/home#hero")}
          className="font-display text-xl font-semibold text-primary"
        >
          Prachi
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-primary/80 transition hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="theme-toggle p-3 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--nav-border)] bg-[color:var(--nav-mobile-bg)] lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNav(link.href)}
                className="text-left text-sm font-medium text-primary/80 transition hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
