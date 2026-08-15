import { socialShortcuts } from "../data/links";
import { IconSymbol } from "./IconSymbol";

export function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="monogram" aria-hidden="true">
          <span>D</span>
          <span>C</span>
        </div>
        <p className="brand-name">Donna Charme</p>
        <h1>Seu brilho começa aqui</h1>
        <p className="intro-copy">
          Semijoias, beleza e todos os seus canais <strong>em um só lugar.</strong>
        </p>
        <div className="quick-links" aria-label="Atalhos principais">
          {socialShortcuts.map((id) => (
            <a className={`quick-button quick-button--${id}`} href="#" key={id} aria-label={`Abrir ${id}`}>
              <IconSymbol id={id} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}