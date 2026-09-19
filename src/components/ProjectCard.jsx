import { ArrowUpRight, Wallet, Globe, Server, Cloud, ShoppingBag, Truck, Github, Play } from "lucide-react";

const ICONS = {
  fintech: Wallet,
  web: Globe,
  backend: Server,
  infra: Cloud,
  ecommerce: ShoppingBag,
  logistics: Truck,
};

export default function ProjectCard({ project, onOpen }) {
  const Icon = ICONS[project.visual] || Globe;

  return (
    <article className={`project-card visual-${project.visual}`} onClick={() => onOpen(project)}>
      <div className="project-top">
        <span className="project-icon"><Icon size={18} /></span>
        {project.status && <span className="project-status">{project.status}</span>}
        {/* {project.video && (
          <span className="project-video-badge"><Play size={11} fill="currentColor" /> Vídeo</span>
        )} */}

        {project.github &&
         ( <a href={project.github}
          target="_blank" rel="noopener noreferrer" 
          className="project-github" onClick={(e) => e.stopPropagation()}
           title="Ver repositório no GitHub" > 
           <Github size={14} /> GitHub </a> )}
      </div>

      <div>
        <h3 className="project-name">{project.name}</h3>
        <span className="project-category">{project.category}</span>
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <span className="project-link">
        Ver projeto <ArrowUpRight size={15} />
      </span>
    </article>
  );
}
