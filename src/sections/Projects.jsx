import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="section section-light" id="projetos">
      <div className="container">
        <SectionHeading
          eyebrow="Trabalho"
          title="Projetos"
          subtitle="Uma seleção de projetos onde apliquei desenvolvimento, infraestrutura e segurança."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <ProjectCard project={p} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
