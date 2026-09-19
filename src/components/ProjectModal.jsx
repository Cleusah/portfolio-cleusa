import { X } from "lucide-react";

// Aceita links normais do YouTube / Vimeo / Google Drive (converte para embed)
// ou ficheiros de vídeo (ex: "/videos/caixapay.mp4").
function parseVideo(url) {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return { kind: "iframe", src: `https://www.youtube.com/embed/${yt[1]}` };

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}` };

  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (drive) return { kind: "iframe", src: `https://drive.google.com/file/d/${drive[1]}/preview` };

  return { kind: "file", src: url };
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // `video` pode ser um só link ou uma lista de links
  const videos = [].concat(project.video || []).map(parseVideo);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <h3>{project.name}</h3>
        <span className="project-category">{project.category}</span>

        <p style={{ marginTop: 18, fontSize: 15, color: "var(--ink)" }}>{project.description}</p>

        {project.status && (
          <p style={{ marginTop: 10, fontSize: 13.5, color: "var(--teal-deep)" }}>● {project.status}</p>
        )}

        {videos.map((v, i) => (
          <div className="modal-video" key={v.src}>
            {v.kind === "iframe" ? (
              <iframe
                src={v.src}
                title={`Vídeo de demonstração ${videos.length > 1 ? i + 1 + " " : ""}— ${project.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={v.src} controls playsInline preload="metadata" />
            )}
          </div>
        ))}

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
