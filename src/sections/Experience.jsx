import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHeading eyebrow="Percurso" title="Experiência profissional" />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.role} as="div" className="timeline-item" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <span className="timeline-role">{job.role}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-company">{job.company}</span>
                  <span className="timeline-location">{job.location}</span>
                </div>
                <ul>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
