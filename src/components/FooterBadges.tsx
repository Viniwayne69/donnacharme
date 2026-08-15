import { footerBadges } from "../data/links";
import { IconSymbol } from "./IconSymbol";

const badgeIcons = ["sparkle", "tag", "truck"] as const;

export function FooterBadges() {
  return (
    <section className="footer-badges" aria-label="Destaques Donna Charme">
      {footerBadges.map((badge, index) => (
        <div className="footer-badge" key={badge}>
          <IconSymbol id={badgeIcons[index]} />
          <span>{badge}</span>
        </div>
      ))}
    </section>
  );
}