import { Activity, BrainCircuit, Github, PlayCircle } from "lucide-react";
import type { ReactNode } from "react";
import { APP_NAME, NAV_ITEMS, type NavItem } from "../app/constants";
import { sectionId } from "../app/routes";

interface LayoutProps {
  activeSection: NavItem;
  onNavigate: (section: NavItem) => void;
  children: ReactNode;
}

export function Layout({ activeSection, onNavigate, children }: LayoutProps) {
  function handleNavigate(item: NavItem) {
    onNavigate(item);
    document.getElementById(sectionId(item))?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#model-theory" aria-label={APP_NAME}>
          <img src={`${import.meta.env.BASE_URL}amor/geodesic-color.svg`} alt="" />
          <span>
            <strong>{APP_NAME}</strong>
            <small>Research resource and analysis lab</small>
          </span>
        </a>
        <nav className="nav-tabs" aria-label="Project sections">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item}
              className={activeSection === item ? "active" : ""}
              onClick={() => handleNavigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="top-actions" aria-label="Status links">
          <span className="status-pill">
            <Activity size={16} />
            Browser ABM
          </span>
          <span className="status-pill">
            <BrainCircuit size={16} />
            Pure TS
          </span>
          <a
            className="icon-link"
            href="https://github.com/"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>Center for Applied Mathematics and Operations Research</span>
        <span className="footer-dot" />
        <span>Scenario exploration model</span>
        <PlayCircle size={16} aria-hidden="true" />
      </footer>
    </div>
  );
}
