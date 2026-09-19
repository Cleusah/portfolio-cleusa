import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
