import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <h3>{project.name}</h3>
        <span className="project-category">{project.category}</span>

        <p style={{ marginTop: 18, fontSize: 15, color: "var(--text)" }}>{project.description}</p>

        {project.status && (
          <p style={{ marginTop: 10, fontSize: 13.5, color: "var(--cyan)" }}>● {project.status}</p>
        )}

        {project.objective && (
          <div className="modal-block">
            <h5>Objetivo</h5>
            <p style={{ fontSize: 14.5 }}>{project.objective}</p>
          </div>
        )}

        {project.tech.length > 0 && (
          <div className="modal-block">
            <h5>Tecnologias</h5>
            <div className="skill-tags">
              {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        )}

        {project.contribution.length > 0 && (
          <div className="modal-block">
            <h5>O meu contributo</h5>
            <ul>{project.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        )}

        {project.security.length > 0 && (
          <div className="modal-block">
            <h5>Segurança</h5>
            <div className="skill-tags">
              {project.security.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        )}

        {project.results && (
          <div className="modal-block">
            <h5>Resultados</h5>
            <p style={{ fontSize: 14.5 }}>{project.results}</p>
          </div>
        )}
      </div>
    </div>
  );
}
