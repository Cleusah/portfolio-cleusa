import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { education, achievements } from "../data/education";

export default function Education() {
  return (
    <section className="section section-light" id="formacao">
      <div className="container">
        <SectionHeading eyebrow="Formação" title="Educação e conquistas" />

        <div className="edu-list">
          {education.map((e, i) => (
            <Reveal key={e.degree} className="edu-item" style={{ transitionDelay: `${i * 70}ms` }}>
              <div>
                <span className="edu-level">{e.level}</span>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-institution">{e.institution}</div>
              </div>
              {e.period && <span className="edu-period">{e.period}</span>}
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          {achievements.map((a) => (
            <Reveal key={a.title} className="achievement-card">
              <span className="achievement-trophy">🏆</span>
              <h3 className="achievement-title">{a.title}</h3>
              <div className="achievement-meta">
                <span><b>Equipa:</b> {a.team}</span>
                <span><b>Projeto:</b> {a.project}</span>
                <span><b>Local:</b> {a.location}</span>
                <span><b>Período:</b> {a.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
