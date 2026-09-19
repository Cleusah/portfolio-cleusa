import { Mail, Github, Linkedin, Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Reveal from "../components/Reveal";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container contact-grid">
        <Reveal>
          <span className="eyebrow">Contacto</span>
          <h2 className="contact-title">Vamos criar algo com impacto?</h2>
          <p className="contact-text">
            Estou aberta a oportunidades, projetos e desafios nas áreas de desenvolvimento, infraestrutura
            e tecnologia.
          </p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <Mail size={16} /> {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <Github size={16} /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={site.cvPath} download className="btn btn-ghost">
              <Download size={15} /> Download CV
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-panel" style={{ transitionDelay: "120ms" }}>
          <div className="qr-box">
            {site.publicUrl ? (
              <QRCodeSVG value={site.publicUrl} size={128} fgColor="#0A0E18" bgColor="#ffffff" />
            ) : (
              <span className="qr-placeholder">
                QR Code disponível<br />após publicação do site
              </span>
            )}
          </div>
          <p style={{ fontSize: 13.5 }}>
            {site.publicUrl
              ? "Aponta a câmara para aceder ao portfólio."
              : "Define site.publicUrl em src/data/site.js assim que publicares o site."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
