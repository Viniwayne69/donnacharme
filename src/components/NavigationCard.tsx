import type { DonnaLink } from "../data/links";
import { IconSymbol } from "./IconSymbol";

type NavigationCardProps = {
  item: DonnaLink;
};

export function NavigationCard({ item }: NavigationCardProps) {
  return (
    <a
      className={`nav-card nav-card--${item.tone} nav-card--${item.id}`}
      href={item.href}
      target={item.href === "#" ? undefined : "_blank"}
      rel={item.href === "#" ? undefined : "noreferrer"}
      aria-label={item.ariaLabel}
    >
      <span className="nav-card__icon" aria-hidden="true">
        <IconSymbol id={item.id} />
      </span>
      <span className="nav-card__text">
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </span>
      <span className="nav-card__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}