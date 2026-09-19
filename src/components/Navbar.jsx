import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#competencias", label: "Competências" },
  { href: "#formacao", label: "Formação" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Scrollspy: destaca no menu a secção que está visível no ecrã.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand">
          <span className="brand-mark">CL</span>
          {site.name.split(" ")[0]}.
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={activeId === l.href ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#contacto" className="btn btn-primary">Vamos conversar</a>
          <button
            className="hamburger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}>Vamos conversar</a>
        </div>
      )}
    </header>
  );
}
