import type { LinkId } from "../data/links";

type IconSymbolProps = {
  id: LinkId | "sparkle" | "tag" | "truck";
};

export function IconSymbol({ id }: IconSymbolProps) {
  if (id === "site") {
    return (
      <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5C9.8 18.1 8.8 15.3 8.8 12s1-6.1 3.2-8.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "whatsapp") {
    return (
      <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 19.4 6.3 16A7.8 7.8 0 1 1 9 18.4l-3.8 1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.2 8.7c.3-.4.7-.4 1-.1l.8 1c.2.3.2.6 0 .9l-.3.4c.6 1.1 1.4 1.9 2.6 2.5l.5-.4c.3-.2.6-.2.9 0l1 .8c.3.3.3.7 0 1-.5.7-1.2.9-2.1.7-2.5-.5-5.1-3.1-5.6-5.6-.2-.8 0-1.6.7-2.1Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="16.4" cy="7.7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (id === "address") {
    return (
      <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21.2s6.2-5.7 6.2-11.3a6.2 6.2 0 0 0-12.4 0c0 5.6 6.2 11.3 6.2 11.3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="9.8" r="2.25" fill="none" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  if (id === "pinterest") {
    return (
      <svg className="symbol symbol--pinterest" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.2 3.1c-4.2 0-7.5 2.9-7.5 6.8 0 2.3 1.2 4.1 3 4.8.3.1.5 0 .6-.3l.2-.9c.1-.3 0-.5-.2-.8-.5-.7-.9-1.5-.9-2.7 0-2.7 2.1-4.9 5.3-4.9 2.9 0 4.7 1.8 4.7 4.3 0 3-1.5 5.1-3.4 5.1-1.1 0-1.9-.9-1.6-2l.7-2.7c.2-.9 0-1.8-.9-1.8-1 0-1.9 1.1-1.9 2.6 0 .9.3 1.6.3 1.6l-1.2 5c-.3 1.3-.2 2.8-.1 3.8.8-.9 1.5-2.2 1.8-3.5l.6-2.4c.5.8 1.4 1.5 2.7 1.5 3.5 0 6.2-3.2 6.2-7.2 0-3.6-3.2-6.3-7.4-6.3Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "tiktok") {
    return (
      <svg className="symbol symbol--tiktok" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.35 3.8c.28 2.55 1.68 4.12 4.05 4.34v3.08c-1.42.04-2.72-.35-3.94-1.13v5.18c0 3.27-2.42 5.63-5.52 5.63-3.02 0-5.34-2.24-5.34-5.1 0-3.12 2.66-5.42 5.88-5.08v3.18c-1.58-.48-2.82.45-2.82 1.84 0 1.18.96 2.04 2.15 2.04 1.34 0 2.2-.88 2.2-2.54V3.8h3.34Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "tag") {
    return (
      <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 12.5 12.5 4H19v6.4l-8.1 8.1a2 2 0 0 1-2.8 0l-3.6-3.4a1.9 1.9 0 0 1 0-2.6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="8" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (id === "truck") {
    return (
      <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 7h10v8h-10V7Zm10 3h3.7l2.8 3v2h-6.5v-5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="7" cy="16.5" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="16.5" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg className="symbol" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.2 5 5.3.6-4 3.6 1.1 5.2L12 14.8l-4.6 2.6 1.1-5.2-4-3.6 5.3-.6L12 3Z" fill="currentColor" />
    </svg>
  );
}