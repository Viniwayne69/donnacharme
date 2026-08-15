export type LinkId = "whatsapp" | "site" | "instagram" | "address" | "pinterest" | "tiktok";

export type LinkTone = "wine" | "rose";

export type DonnaLink = {
  id: LinkId;
  title: string;
  description: string;
  href: string;
  tone: LinkTone;
  ariaLabel: string;
};

export const linkTargets: Record<LinkId, string> = {
  whatsapp: "#",
  site: "#",
  instagram: "#",
  address: "#",
  pinterest: "#",
  tiktok: "#",
};

export const socialShortcuts: LinkId[] = ["site", "instagram", "whatsapp"];

export const navigationLinks: DonnaLink[] = [
  {
    id: "whatsapp",
    title: "Grupo do WhatsApp",
    description: "Entre para receber novidades e ofertas",
    href: linkTargets.whatsapp,
    tone: "wine",
    ariaLabel: "Abrir grupo do WhatsApp da Donna Charme",
  },
  {
    id: "site",
    title: "Site oficial",
    description: "Conheça produtos, condições e atendimento",
    href: linkTargets.site,
    tone: "rose",
    ariaLabel: "Abrir site oficial da Donna Charme",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Veja lançamentos, looks e inspirações",
    href: linkTargets.instagram,
    tone: "wine",
    ariaLabel: "Abrir Instagram da Donna Charme",
  },
  {
    id: "address",
    title: "Endereço",
    description: "Encontre a Donna Charme no mapa",
    href: linkTargets.address,
    tone: "rose",
    ariaLabel: "Abrir endereço da Donna Charme",
  },
  {
    id: "pinterest",
    title: "Pinterest",
    description: "Salve referências e composições delicadas",
    href: linkTargets.pinterest,
    tone: "rose",
    ariaLabel: "Abrir Pinterest da Donna Charme",
  },
  {
    id: "tiktok",
    title: "TikTok",
    description: "Acompanhe vídeos, dicas e tendências",
    href: linkTargets.tiktok,
    tone: "wine",
    ariaLabel: "Abrir TikTok da Donna Charme",
  },
];

export const footerBadges = ["Semijoias", "Peças a partir de R$5,00", "Envio para todo Brasil"];