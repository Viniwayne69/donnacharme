import { HeroSection } from "./components/HeroSection";
import { NavigationCard } from "./components/NavigationCard";
import { navigationLinks } from "./data/links";

export default function App() {
  return (
    <main className="page-shell" aria-label="Hazelink oficial da Donna Charme">
      <article className="hazelink-card">
        <HeroSection />
        <section className="navigation-list" aria-label="Canais principais da Donna Charme">
          {navigationLinks.map((item) => (
            <NavigationCard key={item.id} item={item} />
          ))}
        </section>
        <footer className="brand-footer">
          <p>
            Powered by <strong>hazelink</strong>
          </p>
        </footer>
      </article>
    </main>
  );
}