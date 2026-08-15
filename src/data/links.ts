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
  site: "https://donna-charme.bagypro.com/",
  instagram: "https://www.instagram.com/donnacharmee_/",
  address: "https://maps.app.goo.gl/VutGVV2eVGnRhio96",
  pinterest: "https://br.pinterest.com/donnacharmee0046/?invite_code=beb893c0f04048e3a3734c5cb7fdc8c7&sender=1125337163047988803",
  tiktok: "https://www.tiktok.com/@donna.charme7?_r=1&_t=ZS-984PVY769Vk",
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
    tone: "wine",
    ariaLabel: "Abrir Pinterest da Donna Charme",
  },
  {
    id: "tiktok",
    title: "TikTok",
    description: "Acompanhe vídeos, dicas e tendências",
    href: linkTargets.tiktok,
    tone: "rose",
    ariaLabel: "Abrir TikTok da Donna Charme",
  },
];

export const footerBadges = ["Semijoias", "Peças a partir de R$5,00", "Envio para todo Brasil"];