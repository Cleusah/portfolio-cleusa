import { site } from "../data/site";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <Reveal>
          <div className="hero-name">{site.name}</div>
          <h1 className="hero-title">
            Construo soluções <span className="accent">com tecnologia.</span>
          </h1>
          <p className="hero-text">
            Licenciada em Engenharia Informática e de Computadores, com experiência em desenvolvimento de
            software, infraestrutura, redes e segurança.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">Ver projetos</a>
            <a href="#contacto" className="btn btn-outline">Entrar em contacto</a>
          </div>
        </Reveal>

        <Reveal style={{ transitionDelay: "120ms" }}>
          <div className="avatar-ring" style={{ display: "none" }}>CL</div>
          {/* Avatar preparado para foto: troca este bloco por <img src="/foto.jpg" /> quando tiveres uma. */}
          <div className="terminal">
            <div className="terminal-bar"><span /><span /><span /></div>
            <div className="terminal-body">
              <div className="prompt">~/cleusa $ whoami</div>
              <div className="out">engenheira_informática</div>
              <div className="prompt">~/cleusa $ status</div>
              <div className="out">
                <span className="status-dot" /> disponível para novos desafios
              </div>
              <div className="prompt">~/cleusa $ stack</div>
              <div className="out" style={{ marginBottom: 0 }}>python · react · spring boot · openstack · proxmox</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
