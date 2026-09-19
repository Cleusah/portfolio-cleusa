import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="section section-teal" id="competencias">
      <div className="container">
        <SectionHeading eyebrow="Stack" title="Competências técnicas" />
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} className="skill-group" style={{ transitionDelay: `${i * 80}ms` }}>
              <h4>{g.title}</h4>
              <div className="skill-tags">
                {g.items.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
