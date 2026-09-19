import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { aboutCards } from "../data/skills";

export default function About() {
  return (
    <section className="section section-light" id="sobre">
      <div className="container">
        <SectionHeading eyebrow="Sobre mim" title="Quem sou e o que faço" />
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              Sou licenciada em Engenharia Informática e de Computadores pela Universidade de Cabo Verde,
              com experiência prática em desenvolvimento de software, infraestrutura de TI, redes e
              virtualização.
            </p>
            <p>
              Ao longo da minha formação e experiência profissional, tive oportunidade de trabalhar em
              projetos de desenvolvimento web e mobile, APIs, bases de dados, ambientes virtualizados e
              infraestrutura tecnológica.
            </p>
            <p>
              Tenho especial interesse em continuar a desenvolver competências nas áreas de
              desenvolvimento de software, infraestrutura e cibersegurança.
            </p>
          </Reveal>

          <div className="about-cards">
            {aboutCards.map((c, i) => (
              <Reveal key={c.title} className="about-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
